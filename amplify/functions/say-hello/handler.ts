import { Handler } from "aws-cdk-lib/aws-lambda"

export const handler: Handler = async (event: any) => {
  const { name } = event.arguments
  return `Hello, ${name}!`
}