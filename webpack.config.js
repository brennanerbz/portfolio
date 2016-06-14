require('babel/register');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var path = require('path');
var getConfig = require('hjs-webpack');
var React = require('react');

// var jquery = '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>'

var config = getConfig({
	in: 'src/app.js',
	out: 'public',
	clearBeforeBuild: true,
	isDev: process.env.NODE_ENV !== 'production',
	port: 3000,
	hostname: '127.0.0.1',
	html: function (context) {
        return {
        	'200.html': context.defaultTemplate(),
            'index.html': context.defaultTemplate()
        };
    }
});

module.exports = config;

