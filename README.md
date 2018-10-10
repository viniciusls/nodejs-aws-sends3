# nodejs-aws-sends3
A NodeJS application to send files using Amazon S3

## How to use

- Configure your Amazon AWS credentials on your environment ([Tutorial here](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html));
- Download the project as **.zip**;
- Enter into project directory and run **npm install**;
- Run **npm app.js**;

- Try it using **Postman** or **cURL**, e.g.: `curl -i -X POST -H "Content-Type: multipart/form-data" -F "file=@README.md" -F "bucket=nodejs-example" http://localhost:3000/files/send`

## Parameters per endpoint
### files/send
- bucket: The bucket to where the file will be uploaded;
- file: The file itself.
