import "./styles.scss";
import AppHeader from "./components/app-header/AppHeader";
import AppBody from "./components/app-body/AppBody";
import SignInPage from "./components/sign-in/SignInPage";
import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useAppSelector } from "./redux-slices/hooks";
import { selectUserInfo } from "./redux-slices/user-data/UserDataSlice";

// Configure Amplify with your aws-exports file
Amplify.configure(config);

export default function App({}: WithAuthenticatorProps) {
  const userInfo = useAppSelector(selectUserInfo);

  return (
    <div className="App">
      {userInfo ? (
        <>
          <AppHeader />
          <AppBody />
        </>
      ) : (
        <SignInPage />
      )}
    </div>
  );
}
