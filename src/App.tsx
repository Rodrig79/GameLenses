import "./styles.scss";
import { Provider } from "react-redux";
import store from "./redux-slices/store";
import AppHeader from "./components/app-header/AppHeader";
import AppBody from "./components/app-body/AppBody";
import { useState } from "react";
import SignInPage from "./components/sign-in/SignInPage";
import { Amplify } from "aws-amplify";
import config from './amplifyconfiguration.json';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export default function App({ signOut, user }: WithAuthenticatorProps){
  const [signedIn, setSignedIn] = useState(false);
  // Configure Amplify with your aws-exports file
  Amplify.configure(config);

  return (
    <Provider store={store}>
      <div className="App">
        <AppHeader />
        <h1>Hello {user?.username}</h1>
        <button onClick={signOut}>Sign out</button>

        {signedIn ? <AppBody /> : <SignInPage />}
      </div>
    </Provider>
  );
}
