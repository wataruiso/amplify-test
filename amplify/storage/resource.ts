import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'amplify-test',
  access: (allow) => ({
    'logs/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read', 'write', 'delete'])
    ],
    })
});