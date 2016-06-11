var Project = require('../models/project');

exports.postProject = function(req, res) {
	var project = new Project();

	project.date 	   = req.body.date;
	project.name 	   = req.body.name;
	project.slug 	   = req.body.slug;
	project.tags 	   = req.body.tags;
	project.coverPhoto = req.body.coverPhoto;
	project.color 	   = req.body.color;
	project.markdown   = req.body.markdown;

	project.save(function(err) {
		if(err) res.send(err);
		res.json(project)
	});

};

exports.getProjects = function(req, res) {
	Project.where('date').gte(0).exec(function(err, projects) {
		if(err) res.send(err);
		res.json(projects);
	});
};

exports.getProject  = function(req, res) {
	Project.findOne({name: req.params.project_name}, function(err, project) {
		if(err) res.send(err);
		res.json(project)
	})
};
