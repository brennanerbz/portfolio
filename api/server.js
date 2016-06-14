var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

var s3 = require('./controllers/s3');
var project = require('./controllers/project');

var port = process.env.PORT || 8080;
var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/erbeznik-portfolio';

mongoose.connect(mongoUri);
console.log('Mongoose connected to: ' + mongoUri);

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
	limit: '50mb',
	extended: true
}));
app.use(bodyParser.json({limit: '50mb'}));

// API
var router = express.Router();
// Endpoints
router.route('/s3')
	.get(s3.downloadFile)
	.put(s3.uploadFile);

router.route('/projects')
	.post(project.postProject)
	.get(project.getProjects)
	.put(project.updateProject);

router.route('/projects/:project_name')
	.get(project.getProject)

app.use('/api/v1', router);
app.listen(port);

console.log('API started at http://localhost:' + port + '/');

