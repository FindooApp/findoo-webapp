var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
//mongoose.set('debug', true);
var User = new Schema(
		{
			username: {
				type: String,
				required: true,
				trim: true
			},
			password: {
				type: String,
				trim: true
			},
			email: {
				type: String,
				required: true,
				unique: true,
				trim: true
			},
			OauthId: String,
			OauthToken: String,
			firstname: {
				type: String,
				default: '',
				trim: true
			},
			lastname: {
				type: String,
				default: '',
				trim: true
			},
			verified: {
				type: Boolean,
				default: false,
				required: true
			},
			token: String,
			tokenExpires: Date
		},
		{
			timestamps: true
		}
	).index({ username: 'text', email: 'text', firstname: 'text', lastname: 'text' });;

User.methods.getName = function() {
	return (this.firstname + " " + this.lastname);
};

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
