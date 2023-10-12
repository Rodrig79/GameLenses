import { useState } from "react";
import GameLensCard from "../card/GameLensCard";
import "./MultiCardView.css";
import VoteButtons from "./vote-buttons/VoteButtons";

interface Props {}

const MultiCardView: React.FC<Props> = ({}) => {
  const [topCardIndex, setTopCardIndex] = useState(0);
  const [bottomCardIndex, setBottomCardIndex] = useState(1);

  const refreshIndexes = () => {

  }

  return (
    <div className={"multi_view"}>
      <GameLensCard index={topCardIndex} />
      <VoteButtons topIndex = {topCardIndex} bottomIndex = {bottomCardIndex}/>
      <GameLensCard index={bottomCardIndex} />
    </div>
  );
};

export default MultiCardView;
