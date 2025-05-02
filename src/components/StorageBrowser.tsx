import {
    createAmplifyAuthAdapter,
    createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import "@aws-amplify/ui-react-storage/styles.css";
import { Amplify } from "aws-amplify";

import config from "../../amplifyconfigure.ts";

Amplify.configure(config);

export const { StorageBrowser } = createStorageBrowser({
config: createAmplifyAuthAdapter(),
});