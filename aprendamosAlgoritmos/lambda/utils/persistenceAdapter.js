const {S3PersistenceAdapter} = require('ask-sdk-s3-persistence-adapter');

module.exports = function () {
	return new S3PersistenceAdapter({
		bucketName: process.env.S3_PERSISTENCE_BUCKET
	});
};

