var Q = require('q');

module.exports = function(file) {
	var deferred = Q.defer();
	var reader = new FileReader();
	reader.onload = function(upload) {
		deferred.resolve(upload.target.result)
	}
	reader.readAsDataURL(file)
	return deferred.promise;
}