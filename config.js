module.exports = {
	'secretKey': '12345-67890-09876-54321',
	'mongoUrl': 'mongodb://localhost:27017/findoo',
	'smtpConfig': {
	    host: 'smtp.gmail.com',
	    port: 465,
	    secureConnection: true, // use SSL
	    auth: {
	        user: 'techleadz.test2@gmail.com',
	        pass: 'techleadz123'
	    }
	},
	'EMAIL_FROM': 'Support <support@findoo.com>'
}
