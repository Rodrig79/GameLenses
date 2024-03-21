import "./styles.scss";
import AppHeader from "./components/app-header/AppHeader";
import AppBody from "./components/app-body/AppBody";
import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

// Configure Amplify with your aws-exports file
Amplify.configure(config);

export default function App({}: WithAuthenticatorProps) {
  return (
    <div className="App">
      <AppHeader />
      <AppBody />
    </div>
  );
}
