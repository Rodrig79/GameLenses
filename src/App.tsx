import "./styles.scss";
import SingleCardView from "./components/single-view/SingleCardView";
import MultiCardView from "./components/multi-view/MultiCardView";
import { useState } from "react";

export default function App() {
  const [multiViewON, setMultiViewON] = useState(true);

  return (
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
  );
}
