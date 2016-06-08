var ImageUploader = require('../helpers/image-uploader').ImageUploader;
var ImageGrabber = require('../helpers/image-uploader').ImageGrabber;

module.exports = function(req, res) {

	var image = ImageUploader({
		data_uri: req.body.data.data_uri,
		filename: req.body.data.filename,
		filetype: req.body.data.filetype
	}).then(onSuccessImage, onFailImage);

	function onSuccessImage(response) {
		ImageGrabber(response)
		.then(function(result) {
			res.send({
				status: 'success',
				path: result
			});
		})
	}

	function onFailImage(response) {
		res.send({
			status: 'error'
		});
	}
}