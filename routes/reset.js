var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Verify = require('./verify');
var config = require('../config');

router.post('/', function(req, res, next) {
	
	var token = req.body.reset_token;

	User.findOne({ token: token, verified: false, tokenExpires: { $gt: new Date() }}, function(err, user) {
        if (!user) {
        	return res.status(400).json({
        		err: {
        			message: 'Your token has been expired.'
        		}
			});
        }
        user.token = '';
		user.tokenExpires = 0;
        user.verified = true;
        user.save(function(err, user) {
        	if(err) console.log(err);
        	return res.status(200).json({
        		status: 'Your account has been activated.'
			});
        });
    });
	
});

router.post('/reset', function(req, res, next) {
    
    var token = req.body.reset_token;

    User.findOne({ token: token, tokenExpires: { $gt: new Date() }}, function(err, user) {
        if (!user) {
            return res.status(400).json({
                err: {
                    message: 'Your token has been expired.'
                }
            });
        }
        User.findByUsername(user.username).then(function(sanitizedUser){
            if (sanitizedUser){
                console.log(sanitizedUser);
                sanitizedUser.setPassword(req.body.info.password, function(){
                    sanitizedUser.token = '';
                    sanitizedUser.tokenExpires = 0;
                    sanitizedUser.save();
                    res.status(200).json({message: 'password reset successful'});
                });
            } else {
                res.status(500).json({message: 'This user does not exist'});
            }
        },function(err){
            console.error(err);
            next(err);
        })

        /*user.token = '';
        user.tokenExpires = 0;
        user.pass = true;
        user.save(function(err, user) {
            if(err) console.log(err);
            return res.status(200).json({
                status: 'Your account has been activated.'
            });
        });*/
    });
    
});

module.exports = router;
