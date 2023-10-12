import { CardArray } from "../../../CardArray";
import VoteButton from "./VoteButton";

interface Props {
  topIndex: number;
  bottomIndex: number;
  refreshCards: ()=>void
}

const VoteButtons: React.FC<Props> = ({ topIndex = 0, bottomIndex = 1, refreshCards }) => {
  const topCard = CardArray[topIndex];
  const bottomCard = CardArray[bottomIndex];

  const voteForIndex = (index: number) => {
    refreshCards()
  };


  return (
    <div className={"vote_buttons"}>
      <VoteButton 
      index={topIndex} 
      label={`⬆️ Vote for ${topCard.title} ⬆️`}
      onVote={()=>{
        voteForIndex(topIndex)
      }}
      />

      <VoteButton
        index={bottomIndex}
        label={`⬇️ Vote for ${bottomCard.title} ⬇️`}
        onVote={()=>{
            voteForIndex(bottomIndex)
          }}
    
      />
    </div>
  );
};

export default VoteButtons;
