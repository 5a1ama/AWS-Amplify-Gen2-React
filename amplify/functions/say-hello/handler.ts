import type { Handler } from 'aws-lambda';

// export const handler: Handler = async (event: any) => {
//   const { name } = event.arguments
//   return `Hello, ${name}!`
// }

export const handler: Handler  = async (event: any) => {
    return "Hello from my first function!";
  };