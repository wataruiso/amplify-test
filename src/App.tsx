import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StoragePage from "./pages/storage";
export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.signInDetails?.loginId}</h1>
          <button onClick={signOut}>Sign out</button>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <a href="/storage">Go to Storage Page</a>
            } />
            <Route path="/storage" element={<StoragePage />} />
          </Routes>
          </BrowserRouter>
        </main>
      )}
    </Authenticator>
  );
}