module.exports.create = (application, req, res) => {
    res.send('Not implemented');
};

module.exports.send = (application, req, res) => {
    const body = req.body;
    
    req.assert('toaddresses', 'O e-mail do destinatário é obrigatório.').notEmpty();
    req.assert('subject', 'O assunto é obrigatório.').notEmpty();
    req.assert('text', 'O conteúdo do e-mail é obrigatório.').notEmpty();

    const errors = req.validationErrors();
    
    if (errors) {
        res.send(errors);
        
        return;
    }
    
    const params = {
        Destination: {
            CcAddresses: [
                body.ccaddresses,
            ],
            ToAddresses: [
                body.toaddresses,
            ]
        },
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: body.html || body.text
                },
                Text: {
                    Charset: 'UTF-8',
                    Data: body.text
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: body.subject
            }
        },
        Source: body.fromaddress,
        ReplyToAddresses: [
            (body.replytoaddress || body.fromaddress),
        ],
    };
    
    const ses = application.config.ses();
    
    ses.sendEmail(params, (err, data) => {
        if (err) res.send(err);
        else res.send(data);
    });
};
