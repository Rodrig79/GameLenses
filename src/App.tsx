import "./styles.scss";
import { Provider } from "react-redux";
import store from "./redux-slices/store";
import AppHeader from "./components/app-header/AppHeader";
import AppBody from "./components/app-body/AppBody";
import { useState } from "react";
import SignInPage from "./components/sign-in/SignInPage";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports"; // path to your aws-exports file

export default function App() {
  const [signedIn, setSignedIn] = useState(false);
  // Configure Amplify with your aws-exports file
  Amplify.configure(awsconfig);

  return (
    <Provider store={store}>
      <div className="App">
        <AppHeader />
        {signedIn ? <AppBody /> : <SignInPage />}
      </div>
    </Provider>
  );
}
