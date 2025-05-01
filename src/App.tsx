import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StoragePage from "./pages/storage";
import ApiPage from "./pages/api";
// import DataPage from "./pages/data";
import HomePage from "./pages/home";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import awsconfig from "../aws-config.ts";

export default function App() {
  Amplify.configure({
    // ...awsconfig,
    ...outputs
  });
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <div>
            <h1>Hello {user?.signInDetails?.loginId}</h1>
            <button><a href="/" style={{ color: "white" }}>Go to Home</a></button>
          </div>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/storage" element={<StoragePage />} />
                <Route path="/api" element={<ApiPage />} />
                {/* <Route path="/data" element={<DataPage />} /> */}
              </Routes>
            </BrowserRouter>
            <div>
              <button onClick={signOut}>Sign out</button>
            </div>
          </main>
        )}
      </Authenticator>
  );
}