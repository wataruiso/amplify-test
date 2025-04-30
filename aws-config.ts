
const awsconfig = {
    Auth: {
      Cognito: {
        identityPoolId: process.env.APP_IDENTITY_POOL_ID || "",
        region: process.env.APP_REGION || "",
        userPoolId: process.env.APP_USER_POOL_ID || "",
        userPoolWebClientId: process.env.APP_WEB_CLIENT_ID || "",
      }
    },
    Storage: {
      AWSS3: {
        bucket: process.env.APP_S3_BUCKET_NAME || "",
        region: process.env.APP_REGION || "",
      },
    },
  };
  
  export default awsconfig;