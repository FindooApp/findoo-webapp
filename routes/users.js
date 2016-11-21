var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var API = require('../models/api')
var Verify = require('./verify');
var querystring = require('querystring');
var https = require('https');
var config = require('../config');
var nodemailer = require('nodemailer');
var smtpTransport = require("nodemailer-smtp-transport");
var crypto = require('crypto');
var async = require('async');

router.post('/register', function(req, res, next) {
	var post_data = querystring.stringify({
		'secret' : '6Le36QgUAAAAAIq-09U6sZwS5JE4gLsVXpMN3F5k',
		'response': req.body.myRecaptchaResponse
	});

	// An object of options to indicate where to post to
	var post_options = {
		host: 'www.google.com',
		port: '443',
		path: '/recaptcha/api/siteverify',
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': Buffer.byteLength(post_data)
		}
	};

	// Set up the request
	var post_req = https.request(post_options, function(response) {
		response.setEncoding('utf8');
		var output = '';
		response.on('data', function (chunk) {
			output += chunk;
		});
		response.on('end', function() {
			console.log('Response: ' + output);
			var resp = JSON.parse(output);
			if(resp.success) {
				User.register(new User({ username: req.body.username, email: req.body.email }), req.body.password, function(err, user) {
					if(err) {
						if(err.code && err.code === 11000) {
							return res.status(500).json({err: {
									message: "A user with the given email is already registered",
									name: "UserExistsError"
								}
							});
						}
						return res.status(500).json({err: err});
					}

					if(req.body.firstname) {
						user.firstname = req.body.firstname;
					}
					if(req.body.lastname) {
						user.lastname = req.body.lastname;
					}

					crypto.randomBytes(48, function(err, buffer) {
						var token = buffer.toString('hex');

						user.token = token;
						user.tokenExpires = Date.now() + 3600000; // 1 hour

						user.save(function(err, user) {
							passport.authenticate('local')(req, res, function() {
							  var smtpTransport = nodemailer.createTransport(config.smtpConfig);
						      var mailOptions = {
						        to: user.email,
						        from: config.EMAIL_FROM,
						        subject: 'Findoo Account Activation Email',
						        text: 'You are receiving this because you have signed up on findoo.\n\n' +
						          'Please click on the following link, or paste this into your browser to complete your registration process:\n\n' +
						          'http://' + req.headers.host + '/verify/' + token + '\n\n' +
						          'If you did not request this, please ignore this email.\n'
						      };
						      smtpTransport.sendMail(mailOptions, function(err) {
						      	if(err) {
						      		console.log(err);
						      		return res.status(500).json({
										status: {message: 'Internal Server Error'}
									});
						      	}
						      	return res.status(200).json({
									status: 'An e-mail has been sent to ' + user.email + ' for email verification.'
								});
						      });
							});
						});
					});
				});
			} else {
				return res.status(500).json({err: 'Captcha verification failed'});
			}
		});
	});

	// post the data
	post_req.write(post_data);
	post_req.on('error', function(err) {
		console.log('Error', err);
		return res.status(500).json({err: 'Captcha verification failed'});
	});
	post_req.end();
	
});

router.post('/login', function(req, res, next) {
	var api = true;
	var url = '';
	if(req.body.API_KEY) {
		API.find({
			api_key: req.body.API_KEY
		})
	    .exec(function(err, results) {
	    	if(err) {
	    		console.log(err);
	    		api = false;
	    		res.status(401).json({err: 'Invalid API key.'});
	    	} else {
	    		results.site_url;
	    	}
	    });
	}
	if(api) {
		passport.authenticate('local', function(err, user, info) {
			if(err) {
				return next(err);
			}
			if(!user) {
				return res.status(401).json({
					err: info
				});
			}
			req.logIn(user, function(err) {
				if(err) {
					return res.status(500).json({
						err: 'Could not log in user'
					});
				}
				if(!user.verified) {
					return res.status(400).json({
						err: {
							message: 'You have not verified your email.'
						}
					});
				}
				console.log('User in users: ', user);

				var token = Verify.getToken({"username": user.username, "_id": user._id});
				res.status(200).json({
					status: 'Login successful!',
					success: true,
					firstname: user.firstname,
					lastname: user.lastname,
					email: user.email,
					token: token
				});
			});
		})(req, res, next);
	}
});

router.get('/logout', function(req, res) {
	req.logout();
	res.status(200).json({
		status: 'Bye!'
	});
});

router.post('/forgot', function(req, res, next) {
  async.waterfall([
    function(done) {
      crypto.randomBytes(20, function(err, buf) {
        var token = buf.toString('hex');
        done(err, token);
      });
    },
    function(token, done) {
      User.findOne({ email: req.body.email }, function(err, user) {
        if (!user) {
        	return res.status(401).json({
				err: {message: 'No account with that email address exists.'}
			});
        }

        user.token = token;
        user.tokenExpires = Date.now() + 3600000; // 1 hour

        user.save(function(err) {
          done(err, token, user);
        });
      });
    },
    function(token, user, done) {
      var smtpTransport = nodemailer.createTransport(config.smtpConfig);
      var mailOptions = {
        to: user.email,
        from: config.EMAIL_FROM,
        subject: 'Findoo Password Reset',
        text: 'You are receiving this because you have requested the reset of the password for your account.\n\n' +
          'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
          'http://' + req.headers.host + '/reset/' + token + '\n\n' +
          'If you did not request this, please ignore this email and your password will remain unchanged.\n'
      };
      smtpTransport.sendMail(mailOptions, function(err) {
      	return res.status(200).json({
			message: 'An e-mail has been sent to ' + user.email + ' with further instructions.'
		});
      });
    }
  ], function(err) {
    if (err)
    	return res.status(401).json({
			err: {message: 'No account with that email address exists.'}
		});
  });
});

module.exports = router;
