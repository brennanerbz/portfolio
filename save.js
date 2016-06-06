var cmd = require('node-cmd');
cmd.run('git add --all && git commit -m \"$(date)\" && git push')