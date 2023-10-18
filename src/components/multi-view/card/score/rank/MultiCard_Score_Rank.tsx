import { useAppSelector } from "../../../../../redux-slices/hooks";
import { selectScoreboard } from "../../../../../redux-slices/user-data/UserDataSlice";
import { ScoreboardType } from "../../../../../types/ScoreboardType";
import { GameLensType } from "../../../../GameLensType";
import "./MultiCard_Score_Rank.scss";

interface Props {
  cardInfo: GameLensType;
}

const MultiCard_Score_Rank: React.FC<Props> = ({ cardInfo }) => {
  const index = cardInfo.index;
  const targetID = cardInfo.imageID;
  const scoreboard: ScoreboardType = useAppSelector(selectScoreboard);

  let score = 0;
  if (scoreboard?.[index - 1]?.score) {
    score = scoreboard[index - 1 ].score;
  }

  let rankNum = -1; // Initialize rankNum

  if (scoreboard) {
    const sortedKeys = Object.keys(scoreboard).sort(
      (a, b) => scoreboard[b]?.score - scoreboard[a]?.score
    );

    sortedKeys.forEach((n, idx) => {
      const nImageID = scoreboard[n].imageID;
      if (targetID === nImageID) {
        rankNum = idx + 1; // +1 because idx starts from 0
      }
    });
  }

  const cardArrayLength = Object.keys(scoreboard || {}).length;
  const diamondCutoff = Math.ceil(cardArrayLength * 0.05);
  const goldCutoff = Math.ceil(cardArrayLength * 0.15);
  const silverCutoff = Math.ceil(cardArrayLength * 0.5);

  let rankColor: RankType = "bronze";

  if (rankNum !== -1) {
    // Only update rank if rankNum is valid
    if (rankNum <= diamondCutoff) {
      rankColor = "diamond";
    } else if (rankNum <= goldCutoff) {
      rankColor = "gold";
    } else if (rankNum <= silverCutoff) {
      rankColor = "silver";
    }
  }

  return (
    <div className={"multi_card_score_rank"}>
      <div className="multi_card_score_rank_left">
        <label>Rank: </label>
      </div>

      <div className="multi_card_score_rank_right">
        <div className="trophy_area">
          <div className="trophy_icon">
            <label className={`trophy_icon_${rankColor}`}>🏆</label>
          </div>
          <>
            {rankNum >= 0 && (
              <div className="trophy_number">
                <label>#</label>
                <label>{rankNum}</label>
              </div>
            )}
          </>
        </div>

        <div className="score_trophy_value">
          <label>[ {Math.ceil(score)} pts ]</label>
        </div>
      </div>
    </div>
  );
};

export default MultiCard_Score_Rank;
