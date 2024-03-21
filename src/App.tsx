import "./styles.scss";
import { Provider } from "react-redux";
import store from "./redux-slices/store";
import AppHeader from "./components/app-header/AppHeader";
import AppBody from "./components/app-body/AppBody";
import { useState } from "react";
import SignInPage from "./components/sign-in/SignInPage";

export default function App() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <Provider store={store}>
      <div className="App">
        <AppHeader />
        {signedIn ? <AppBody /> : <SignInPage />}
      </div>
    </Provider>
  );
}
