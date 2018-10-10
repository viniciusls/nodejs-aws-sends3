module.exports = (application) => {
    application.get('/files/create', (req, res) => {
        application.app.controllers.files.create(application, req, res);
    });

    application.post('/files/send', (req, res) => {
        application.app.controllers.files.send(application, req, res);
    });
};
