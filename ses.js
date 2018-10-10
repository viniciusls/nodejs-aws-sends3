const aws = require('aws-sdk');

const credentials = new aws.SharedIniFileCredentials({ profile: 'ses' });

const sesClient = () => {
    aws.config.region = 'us-east-1';
    aws.config.credentials = credentials;
    
    return new aws.SES();
};

module.exports = () => sesClient;
