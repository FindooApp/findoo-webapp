var express = require('express');
var router = express.Router();
var passport = require('passport');
var API = require('../models/api');
var Verify = require('./verify');
var querystring = require('querystring');
var https = require('https');
var hat = require('hat');

router
.get('/', Verify.verifyUser, function(req, res, next) {
	API.find({
		created_by: req.decoded._id
	})
	    .exec(function(err, results) {
	    	if(err) {
	    		console.log(err);
	    		res.status(500).json({err: err});
	    	} else {
	    		res.status(200).json({
					results: results
				});
	    	}
	    });
})
.post('/register', Verify.verifyUser, function(req, res, next) {
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
				var KEY = hat();
				var api = new API({ app_name: req.body.app_name, api_key: KEY, site_url: req.body.site_url, created_by: req.decoded._id });
				api.save(function(err, api) {
					if(err) {
						return res.status(500).json({err: err});
					}

					return res.status(200).json({
						status: 'success',
						message: 'Registration Successful!',
						API_KEY: KEY,
						app_name: req.body.app_name
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

module.exports = router;
