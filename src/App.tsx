import "./styles.scss";
import SingleCardView from "./components/single-view/SingleCardView";
import MultiCardView from "./components/multi-view/MultiCardView";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux-slices/store";

export default function App() {
  const [multiViewON, setMultiViewON] = useState(true);

  return (
    <Provider store={store}>

    <div className="App">
      <div className="top_bar">
        <label>{multiViewON ? "Multi-View" : "Single-View"}</label>
        <button
          onClick={() => {
            setMultiViewON(!multiViewON);
          }}
        >
          {multiViewON ? "Switch to Single-View" : "Switch to Multi-View"}
        </button>
      </div>
      {multiViewON ? <MultiCardView /> : <SingleCardView />}
    </div>
    </Provider>
  );
}
