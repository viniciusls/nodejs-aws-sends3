module.exports.create = (application, req, res) => {
    res.send('Not implemented');
};

module.exports.send = (application, req, res) => {
    const body = req.body;
    
    //req.assert('toaddresses', 'O e-mail do destinatário é obrigatório.').notEmpty();

    const errors = req.validationErrors();
    
    if (errors) {
        res.send(errors);
        
        return;
    }
    
    const s3 = application.config.s3();
    
    s3.send(body, (err, data) => {
        if (err) res.send(err);
        else res.send(data);
    });
};
