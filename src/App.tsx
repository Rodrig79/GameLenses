import "./styles.scss";
import SingleCardView from "./components/single-view/SingleCardView";
import MultiCardView from "./components/multi-view/MultiCardView";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux-slices/store";
import ScoreboardView from "./components/scoreboard-view/ScoreboardView";
import AppHeader from "./components/app-header/AppHeader";

export default function App() {
  
  type ViewModeType = ("multi" | "single" | "score")

  const [viewMode, setViewMode] = useState<ViewModeType>("multi");

  return (
    <Provider store={store}>

    <div className="App">
     <AppHeader setViewMode={setViewMode}/>
      {
      viewMode==="multi" ? <MultiCardView /> 
      : 
      viewMode==="single" ? <SingleCardView />: 
      <ScoreboardView />}
    </div>
    </Provider>
  );
}
