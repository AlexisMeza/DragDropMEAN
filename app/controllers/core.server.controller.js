'use strict';

/**
 * Module dependencies.
 */
exports.index = function (req, res) {
    res.render('index', {
        user: req.user || null,
        request: req
    });
};
exports.upload = function (req, res) {
    console.log(req.files);
    res.end('File uploaded.');
    /*res.send({
        message: 'File uploaded.'
    });*/
};
