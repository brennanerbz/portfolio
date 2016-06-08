var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var s3 = require('./controllers/s3');
var imageController = require('./controllers/image');

var port = process.env.PORT || 8080;

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// API
var router = express.Router();
// Endpoints
router.route('/s3')
	.get(s3.downloadFile)
	.put(s3.uploadFile)

app.use('/api/v1', router);
app.listen(port);

console.log('API started at http://localhost:' + port + '/');

