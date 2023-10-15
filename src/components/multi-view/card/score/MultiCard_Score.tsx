import { GameLensType } from "../../../GameLensType";
import MultiCard_Score_GPT from "./gpt/MultiCard_Score_GPT";
import MultiCard_Score_Rank from "./rank/MultiCard_Score_Rank";

interface Props {
  cardInfo: GameLensType;
}

const MultiCard_Score: React.FC<Props> = ({ cardInfo}) => {


  return (
    <div className="multi_card_score">
      <div className="multi_card_score_hologram">
        <MultiCard_Score_Rank cardInfo={cardInfo}/>
        <MultiCard_Score_GPT cardInfo={cardInfo} />
      </div>
    </div>
  );
};

export default MultiCard_Score;
