import { useEffect, useState } from "react";
import "./MultiCardView.scss";
import VoteButtons from "./vote-buttons/VoteButtons";
import MultiCard from "./card/MultiCard";

interface Props {}

const MultiCardView: React.FC<Props> = ({}) => {
  const [topCardIndex, setTopCardIndex] = useState(0);
  const [bottomCardIndex, setBottomCardIndex] = useState(1);

  useEffect(()=>{
    refreshCards()

  }, [])

  const refreshCards = () => {
    let newTopIndex = Math.floor(Math.random() * 116); // Random number between 0 and 115
    let newBottomIndex = Math.floor(Math.random() * 116); // Random number between 0 and 115
  
    // Make sure top and bottom indexes are not the same
    while (newTopIndex === newBottomIndex) {
      newBottomIndex = Math.floor(Math.random() * 116); // Random number between 0 and 115
    }
  
    setTopCardIndex(newTopIndex);
    setBottomCardIndex(newBottomIndex);
  };
  

  

  return (
    <div className={"multi_view"}>
      <MultiCard index={topCardIndex}  bgColor="blue"/>
      <VoteButtons topIndex = {topCardIndex} bottomIndex = {bottomCardIndex} refreshCards={()=>{
        refreshCards()
      }}/>
      <MultiCard index={bottomCardIndex} bgColor="red"/>
    </div>
  );
};

export default MultiCardView;
