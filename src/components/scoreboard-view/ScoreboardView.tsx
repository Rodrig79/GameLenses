import { useAppDispatch, useAppSelector } from "../../redux-slices/hooks";
import {
  selectScoreboard,
  setCardIndex,
  setScoreboard,
  setViewMode,
} from "../../redux-slices/user-data/UserDataSlice";
import { ScoreboardType } from "../../types/ScoreboardType";
import { CardArray } from "../../CardArray";
import { GameLensType } from "../GameLensType";
import "./ScoreboardView.scss";

interface Props {}

const ScoreboardView: React.FC<Props> = ({}) => {
  const scoreboard: ScoreboardType = useAppSelector(selectScoreboard);
  const lensArray: GameLensType[] = CardArray;

  const dispatch = useAppDispatch();

  const resetScoreboard = () => {
    const newScoreboard: ScoreboardType = {};
    dispatch(setScoreboard(newScoreboard));
  };


  // Convert scoreboard object to an array and sort by score
  const sortedKeys = Object.keys(scoreboard).sort(
    (a, b) => {
      return(
    scoreboard[b].score - scoreboard[a].score)
  }
    
  );


  // Calculate the number of players for each rank
  const cardArrayLength = sortedKeys.length;
  const diamondCutoff = Math.ceil(cardArrayLength * 0.05);
  const goldCutoff = Math.ceil(cardArrayLength * 0.15);
  const silverCutoff = Math.ceil(cardArrayLength * 0.5);

  return (
    <div className={"scoreboard_view"}>
      {sortedKeys.map((key, index) => {
        let rank: RankType = "bronze";
        let rankNum = index + 1
        // Assign ranks based on index
        if (index < diamondCutoff) {
          rank = "diamond";
        } else if (index < goldCutoff) {
          rank = "gold";
        } else if (index < silverCutoff) {
          rank = "silver";
        }

        return (
          <button key={key} className="scoreboard_button"
          onClick={()=>{
            dispatch(setCardIndex(parseInt(key)))
            dispatch(setViewMode("single"))
          }}
          >
            <label className={`scoreboard_score_trophy_${rank}`}>🏆</label>
            <label className={`scoreboard_score_${rank}`}>#{rankNum}</label>
            <label className={`scoreboard_score_label`}>
              [{Math.ceil(scoreboard[key].score)} pts]
            </label>
            <label className="scoreboard_title">{lensArray[key].title}</label>
          </button>
        );
      })}
      <button onClick={resetScoreboard}>Reset Scoreboard</button>
    </div>
  );
};

export default ScoreboardView;
