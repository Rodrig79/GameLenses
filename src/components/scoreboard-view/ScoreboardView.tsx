import { useAppDispatch, useAppSelector } from "../../redux-slices/hooks";
import {
  selectScoreboard,
  setScoreboard,
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

  // Convert scoreboard object to an array and sort by score
  const sortedKeys = Object.keys(scoreboard).sort(
    (a, b) => scoreboard[b].score - scoreboard[a].score
  );

  const resetScoreboard = () => {
    const newScoreboard: ScoreboardType = {};

    dispatch(setScoreboard(newScoreboard));
  };

  return (
    <div className={"scoreboard_view"}>
      {sortedKeys.map((key) => (
        <div key={key} className="scoreboard_div">
          <label className="scoreboard_title">{lensArray[key].title}</label>
          <label className="scoreboard_score">{scoreboard[key].score}</label>
        </div>
      ))}
      <button
        onClick={resetScoreboard}
      >
        Reset Scoreboard
      </button>
    </div>
  );
};

export default ScoreboardView;
