import type { Schema } from "../../data/resource"

export const handler: Schema["sayHello"]["functionHandler"] = async (event) => {
  const { name } = event.arguments
  return `Hello, ${name}!`
}

// export const handler: Handler  = async (event: any) => {
//     return "Hello from my first function!";
//   };