import { uploadFile } from 'react-s3';
import { Buffer } from 'buffer';
window.Buffer = Buffer;

const S3_BUCKET = 'multimeds';
const REGION = 'ap-south-1';
const ACCESS_KEY_ID = 'AKIAWSKF3C7JUCLE5EGM';
const SECRET_ACCESS_KEY = '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';

const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
};

const uploadImageToS3WithReactS3 = (file) => {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject('No file selected for upload.');
            return;
        }

        uploadFile(file, config)
            .then(data => {
                console.log('Upload success:', data.location);
                resolve(data.location); // Resolve with the URL of the uploaded file
            })
            .catch(err => {
                console.error('Upload error:', err);
                reject(err); // Reject the promise with the error
            });
    });
};

export default uploadImageToS3WithReactS3;
