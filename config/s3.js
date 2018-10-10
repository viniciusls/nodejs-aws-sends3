const aws = require('aws-sdk');

const credentials = new aws.SharedIniFileCredentials({ profile: 's3' });

const s3Client = () => {
    aws.config.region = 'us-east-1';
    aws.config.credentials = credentials;
    
    return new aws.S3();
};

module.exports = () => s3Client;
