import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'amplifyTeamDrive', 

  access: (allow) => ({
    'admin-media/*': [
      allow.groups(["Admins"]).to(['read','write']),
      allow.guest.to(['read', 'write']),
      allow.authenticated.to(['read', 'write'])
    ],
  })    
});