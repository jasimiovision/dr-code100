const AWS = require('aws-sdk');
const aws_config = require('./aws_config.js');

// Setting up AWS Credentials
AWS.config.update({
    accessKeyId: aws_config.iam_access_id,
    secretAccessKey: aws_config.iam_secret,
    region: aws_config.region,
  });
  
// Creating a new s3 instance to communicate with
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

module.exports = s3;