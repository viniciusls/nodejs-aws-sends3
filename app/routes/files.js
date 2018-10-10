module.exports = (application) => {
    application.get('/mail/create', (req, res) => {
        application.app.controllers.mail.create(application, req, res);
    });

    application.post('/mail/send', (req, res) => {
        application.app.controllers.mail.send(application, req, res);
    });
};
