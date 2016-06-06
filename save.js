// var cmd = require('node-cmd');
// cmd.run('git add --all && git commit -m \"$(date)\" && git push')
const exec = require('child_process').exec;
exec('git add --all && git commit -m \"$(date)\" && git push')