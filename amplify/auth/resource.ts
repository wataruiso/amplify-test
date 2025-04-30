// import { referenceAuth  } from '@aws-amplify/backend';

// export const auth = referenceAuth({
//   userPoolId: process.env.APP_USER_POOL_ID,
//   // identityPoolId: process.env.MY_IDENTITY_POOL_ID,
//   // authRoleArn: process.env.MY_AUTH_ROLE_ARN,
//   // unauthRoleArn: process.env.MY_UNAUTH_ROLE_ARN,
//   // userPoolClientId: process.env.MY_USER_POOL_CLIENT_ID,
// });

import { defineAuth } from "@aws-amplify/backend"

export const auth = defineAuth({
  loginWith: {
    email: true,
  },
})