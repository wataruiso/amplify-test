// import { InvokeCommand, LambdaClient } from '@aws-sdk/client-lambda'
// import { fetchAuthSession } from 'aws-amplify/auth'
// import outputs from "../../amplify_outputs.json"
// const { credentials } = await fetchAuthSession()
// const awsRegion = outputs.auth.aws_region
// const functionName = outputs.custom.helloWorldFunctionName
// const labmda = new LambdaClient({ credentials: credentials, region: awsRegion })
// const command = new InvokeCommand({
//   FunctionName: functionName,
// });
// const apiResponse = await labmda.send(command);




// export default function DataPage() {

//   let payload: any = null;

//   if (apiResponse.Payload) {
//     payload = JSON.parse(new TextDecoder().decode(apiResponse.Payload));
//   }

//   return (
//     <>
//     <div>
//       {payload}
//     </div>
//     </>
//   )
// }