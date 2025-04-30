import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { storage } from './storage/resource';
// import { data } from './data/resource';
// import { sayHello } from './functions/say-hello/resource';

const backend = defineBackend({
  auth,
  storage,
});

// const authenticatedUserIamRole = backend.auth.resources.authenticatedUserIamRole;
// backend.sayHello.resources.lambda.grantInvoke(authenticatedUserIamRole);

// backend.addOutput({
//     custom: {
//         helloWorldFunctionName: backend.sayHello.resources.lambda.functionName,
//     },
// });
  