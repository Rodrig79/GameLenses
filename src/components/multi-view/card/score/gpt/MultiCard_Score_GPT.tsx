import { GameLensType } from "../../../../GameLensType";
import GPT_Star from "./GPT_Star";
import './MultiCard_Score_GPT.scss'

interface Props {
  cardInfo: GameLensType;
}

const MultiCard_Score_GPT: React.FC<Props> = ({ cardInfo}) => {
  const gptScore = cardInfo.gptScore;

  var stars = 1;
  if (gptScore >= 10) {
    stars = 5;
  } else if (gptScore >= 9) {
    stars = 4;
  } else if (gptScore >= 8) {
    stars = 3;
  } else if (gptScore >= 7) {
    stars = 2;
  }
  
  return (
    <div className={"multi_card_score_gpt"}>
    <div className={"multi_card_score_gpt_label"}>
      <label>GPT: </label>
    </div>

    <div className="multi_card_score_gpt_stars">
      <GPT_Star isGlowing={true} />
      <GPT_Star isGlowing={stars > 1} />
      <GPT_Star isGlowing={stars > 2} />
      <GPT_Star isGlowing={stars > 3} />
      <GPT_Star isGlowing={stars > 4} />
    </div>
  </div>

   
  );
};

export default MultiCard_Score_GPT;
