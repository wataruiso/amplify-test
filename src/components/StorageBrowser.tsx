import {
    createAmplifyAuthAdapter,
    createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import "@aws-amplify/ui-react-storage/styles.css";
// import { Amplify } from "aws-amplify";

// import outputs from "../amplify_outputs.json";
// import awsconfig from "../../aws-config.ts";

// Amplify.configure({
//   // ...awsconfig,
//   ...outputs
// });

export const { StorageBrowser } = createStorageBrowser({
config: createAmplifyAuthAdapter(),
});