import {
    createAmplifyAuthAdapter,
    createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import "@aws-amplify/ui-react-storage/styles.css";
import { Amplify } from "aws-amplify";

import config from '../../amplify_outputs.json';

// note: `Amplify.configure` must be run before call to `createAmplifyAuthAdapter`
Amplify.configure(config);

export const { StorageBrowser } = createStorageBrowser({
config: createAmplifyAuthAdapter(),
});