import "./styles.scss";
import { Provider } from "react-redux";
import store from "./redux-slices/store";
import AppHeader from "./components/app-header/AppHeader";
import AppBody from "./components/app-body/AppBody";
import { useEffect, useState } from "react";
import SignInPage from "./components/sign-in/SignInPage";
import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Hub } from "aws-amplify/utils";
import {
  signInWithRedirect,
  signOut,
  getCurrentUser,
  AuthUser,
} from "aws-amplify/auth";

// Configure Amplify with your aws-exports file
Amplify.configure(config);

export default function App({ }: WithAuthenticatorProps) {
  
  const [userInfo, setUserInfo] = useState(null)
  const [signedIn, setSignedIn] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const [customState, setCustomState] = useState<string | null>("Custom State:");

  useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload }) => {
      switch (payload.event) {
        case "signInWithRedirect":
          getUser();
          break;
        case "signInWithRedirect_failure":
          setError("An error has occurred during the OAuth flow.");
          setUserInfo(null)
          break;
        case "customOAuthState":
          setCustomState(payload.data); // this is the customState provided on signInWithRedirect function
          break;
      }
    });

    getUser();

    return unsubscribe;
  }, []);



  const getUser = async (): Promise<void> => {
    try {
      const currentUser = await getCurrentUser();
      setUserInfo(currentUser);
    } catch (error) {
      setUserInfo(null)
      console.error(error);
      console.log("Not signed in");
    }
  };

  const signOutAmplify = () => {
    signOut()
  }
  return (
    <Provider store={store}>
      <div className="App">
        <AppHeader />
        <h1>Hello {userInfo?.username}</h1>
        <div>{customState}</div>
        <button onClick={() => signInWithRedirect({ provider: "Google", customState: "shopping-cart" })}>
        Open Google
      </button>
        <button onClick={signOutAmplify}>Sign out</button>

        {signedIn ? <AppBody /> : <SignInPage />}
      </div>
    </Provider>
  );
}
