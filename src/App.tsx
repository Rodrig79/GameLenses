import "./styles.scss";
import { Provider } from "react-redux";
import store from "./redux-slices/store";
import AppHeader from "./components/app-header/AppHeader";
import AppBody from "./components/app-body/AppBody";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppHeader />
        <AppBody />
      </div>
    </Provider>
  );
}
