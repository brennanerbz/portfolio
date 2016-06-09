var fs = require('fs');
var cmd = require('node-cmd')

fs.readFile('./package.json', 'utf8', (err, data) => {
	let d = JSON.parse(data);
	for(key in d.dependencies) {
		cmd.run(`sudo npm i --save ${key}@latest`)
	}
})