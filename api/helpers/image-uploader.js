var Q = require('q'); // promise library
var knox = require('knox'); // s3 client

var ImageUploader = function(options) {

	var deferred = Q.defer();
	var buf = new Buffer(options.data_uri.replace(/^data:image\/\w+;base64,/, ''), 'base64');

	knoxClient = knox.createClient({
		key: 'AKIAJVDVAL5LZIYV7FEQ',
		secret: 'RwN7taVJCibs2eGsasmzmrFDs38Om0KD1VBLkOJo',
		bucket: 'erbeznik-portfolio'
	});

	req = knoxClient.put('/images/' + options.filename, {
		'Content-Length': buf.length,
		'Content-Type': options.filetype,
		'x-amz-acl': 'public-read'
	});

	req.on('response', function(res) {
		if(res.statusCode === 200) {
			deferred.resolve(res.req.path);
		} else {
			deferred.reject({error: 'true'})
		}
	});

	req.end(buf);
	return deferred.promise;
}

var ImageGrabber = function(path) {
	var deferred = Q.defer();
	var knoxClient = knox.createClient({
		key: 'AKIAJVDVAL5LZIYV7FEQ',
		secret: 'RwN7taVJCibs2eGsasmzmrFDs38Om0KD1VBLkOJo',
		bucket: 'erbeznik-portfolio'
	});
	req = knoxClient.get(path.replace(/%2520/g, '+'))
	req.on('response', function(res) {
		console.log(res)
		if(res.statusCode === 200) {
		} else {
			deferred.reject({error: 'true'})
		}
	})
	req.end();
	return deferred.promise;
}

module.exports = {
	ImageUploader: ImageUploader,
	ImageGrabber: ImageGrabber
}