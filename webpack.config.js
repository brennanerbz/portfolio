require('babel/register');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var path = require('path');
var getConfig = require('hjs-webpack');
var React = require('react');

var highlight = '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>' +
				'<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/styles/default.min.css">' + 
				'<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/highlight.min.js"></script>' + 
				'<script>hljs.initHighlightingOnLoad();</script>'

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
            'index.html': context.defaultTemplate({head: highlight})
        };
    }
});

module.exports = config;

