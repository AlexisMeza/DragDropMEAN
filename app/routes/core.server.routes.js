'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('../../app/controllers/core.server.controller');
	app.route('/uploadtest').post(core.upload);
	app.route('/').get(core.index);
};
