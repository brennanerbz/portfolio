require('babel/register');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var path = require('path');
var getConfig = require('hjs-webpack');
var React = require('react');

var config = getConfig({
	in: 'src/app.js',
	out: 'public',
	clearBeforeBuild: true,
	isDev: process.env.NODE_ENV !== 'production',
	port: 3000,
	hostname: 'docbrown.local',
	html: function (context) {
        return {
            'index.html': context.defaultTemplate()
        };
    }
});

module.exports = config;

