const fs = require('fs');

module.exports.create = (application, req, res) => {
    res.send('Not implemented');
};

module.exports.send = (application, req, res) => {
    const body = req.body;
    const file = req.files.file;

    req.assert('bucket', 'O bucket é obrigatório.').notEmpty();

    const errors = req.validationErrors();
    
    if (errors) {
        res.send(errors);
        
        return;
    }
    
    
    fs.readFile(file.path, (err, data) => {
        if (err) res.send(err);
        
        const s3 = application.config.s3();

        s3.createBucket({ Bucket: body.bucket }, () => {
            const params = {
                Bucket: body.bucket,
                Key: file.originalFilename,
                Body: data
            };

            s3.upload(params, (err, data) => {
                fs.unlink(file.path, (err) => {
                    if (err) console.log(err);

                    console.log('Temp file deleted');
                });

                if (err) {
                    res.status(500).send(err);

                    return;
                }

                res.status(200).send('File uploaded successfully');
            });
        });
    });
};
