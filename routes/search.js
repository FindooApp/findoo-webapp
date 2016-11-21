var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next) {

	var key = req.query.keyword;
	if(!key) {
		res.status(200).json({
			profiles: []
		});
		return;
	}
	var terms = key.split(' ');
	var regexString = "";
	for (var i = 0; i < terms.length; i++)
	{
	    regexString += terms[i];
	    if (i < terms.length - 1) regexString += '|';
	}
	var re = new RegExp(regexString, 'ig');

	User
		.aggregate()
		.project({email: '$email', username: '$username', fullName: {$concat: ['$firstname', ' ', '$lastname']}})
		.match({$or: [
			{ 'fullName': re },
			{ 'username' : {'$regex': key, $options: 'i'} },
			{ 'email' : {'$regex': key, $options: 'i'} },
			{ 'firstname' : {'$regex': key, $options: 'i'} },
			{ 'lastname' : {'$regex': key, $options: 'i'} },
		]})
		.exec(function(err, results) {
			if(err) {
	    		console.log(err);
	    		next(err);
	    	} else {
	    		res.status(200).json({
					profiles: results
				});
	    	}
		});
});

router.get('/keyword', function(req, res, next) {

	var key = req.query.keyword;
	if(!key) {
		res.status(200).json({
			list: []
		});
		return;
	}
	User
		.find({$or: [
			{ 'username' : {'$regex': key, $options: 'i'} },
			{ 'email' : {'$regex': key, $options: 'i'} },
			{ 'firstname' : {'$regex': key, $options: 'i'} },
			{ 'lastname' : {'$regex': key, $options: 'i'} },
		]})
	    .select('firstname lastname username email')
	    .exec(function(err, results) {
	    	if(err) {
	    		console.log(err);
	    		next(err);
	    	} else {
	    		res.status(200).json({
					user: results
				});
	    	}
	    });
});

module.exports = router;
