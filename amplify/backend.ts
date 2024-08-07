import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';
import { sayHelloFunction } from './functions/say-hello/resource';


defineBackend({
  auth,
  data,
  storage,
  sayHelloFunction
});
