import { defineFunction } from '@aws-amplify/backend';

export const sayHelloFunction = defineFunction({
  name: 'say-hello',
  entry: './handler.ts'
});