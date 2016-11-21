var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//mongoose.set('debug', true);
var API = new Schema(
		{
			app_name: {
				type: String,
				required: true,
				trim: true
			},
			site_url: {
				type: String,
				required: true,
				trim: true
			},
			api_key: {
				type: String,
				required: true,
				unique: true,
				trim: true
			},
			created_by: {
				required: true,
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User'
			}
		},
		{
			timestamps: true
		}
	);

module.exports = mongoose.model('API', API);
