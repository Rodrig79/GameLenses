import { CardArray } from "../../../CardArray";
import VoteButton from "./VoteButton";

interface Props {
  topIndex: number;
  bottomIndex: number;
}

const VoteButtons: React.FC<Props> = ({ topIndex = 0, bottomIndex = 1 }) => {
  const topCard = CardArray[topIndex];
  const bottomCard = CardArray[bottomIndex];

  const voteForIndex = (index: number) => {
    
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
