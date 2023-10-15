import { CardArray } from "../../../CardArray";
import { useAppDispatch, useAppSelector } from "../../../redux-slices/hooks";
import {
  selectScoreboard,
  setScoreboard,
} from "../../../redux-slices/user-data/UserDataSlice";
import { ScoreboardType } from "../../../types/ScoreboardType";
import VoteButton from "./VoteButton";

interface Props {
  topIndex: number;
  bottomIndex: number;
  refreshCards: () => void;
}

const VoteButtons: React.FC<Props> = ({
  topIndex = 0,
  bottomIndex = 1,
  refreshCards,
}) => {
  const topCard = CardArray[topIndex];
  const bottomCard = CardArray[bottomIndex];
  const dispatch = useAppDispatch();
  const scoreboard: ScoreboardType = useAppSelector(selectScoreboard);

  const voteForIndex = (winnerIndex: number, loserIndex: number) => {
    // Ensure the indices exist with a minimum score of 12

    var currentWinnerScore = 12;
    var currentLoserScore = 12;

    if(scoreboard[winnerIndex]?.score){
      currentWinnerScore = scoreboard[winnerIndex].score
    }

    if(scoreboard[loserIndex]?.score){
      currentLoserScore = scoreboard[loserIndex].score
    }

    // Determine the bonus points
    let bonusPoints = 0;
    if (currentWinnerScore <= currentLoserScore) {
        bonusPoints = currentLoserScore * 0.5;
    }
    
    if(bonusPoints < 12){
      bonusPoints = 12;
    }

    // Calculate the new winner score
    const newWinnerScore = currentWinnerScore + bonusPoints;

    const newScoreboard: ScoreboardType = {
        ...scoreboard,
        [winnerIndex]: {
            index: winnerIndex,
            score: newWinnerScore,
        },
        [loserIndex]: {  // Ensure loserIndex is in the scoreboard with at least a score of 12
            index: loserIndex,
            score: currentLoserScore
        },
    };

    dispatch(setScoreboard(newScoreboard));

    refreshCards();
};


  return (
    <div className={"vote_buttons"}>
      <VoteButton
        index={topIndex}
        label={`⬆️ Vote for ${topCard.title} ⬆️`}
        onVote={() => {
          voteForIndex(topIndex, bottomIndex);
        }}
      />

      <VoteButton
        index={bottomIndex}
        label={`⬇️ Vote for ${bottomCard.title} ⬇️`}
        onVote={() => {
          voteForIndex(bottomIndex, topIndex);
        }}
      />
    </div>
  );
};

export default VoteButtons;
