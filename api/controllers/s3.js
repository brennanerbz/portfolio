var aws = require('aws-sdk');

aws.config.update({
    accessKeyId: 'AKIAJVDVAL5LZIYV7FEQ',
    secretAccessKey: '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'
});

aws.config.region = 'us-west-2';

exports.uploadFile = function(req, res) {

    var file = req.body.file;
    var filename = req.body.filename;
    var filetype = req.body.filetype;
    var s3 = new aws.S3();

    var buf = new Buffer(file.replace(/^data:image\/\w+;base64,/, ''), 'base64');

    var params = {
        Bucket: 'erbeznik-portfolio',
        Key: filename,
        Body: buf,
        ContentType: filetype,
        ContentLength: buf.length,
        ACL: 'public-read'
    };

    s3.upload(params, function(err, data) {
        if (err) {
            res.send(err)
        } else {
            res.json(data);
        }
        res.end()
    });
}

exports.downloadFile = function(req, res) {
    var s3 = new aws.S3();
    var file = s3.getObject({
        Bucket: 'erbeznik-portfolio',
        Key: req.query.key
    }).createReadStream()
    file.pipe(res);
}

