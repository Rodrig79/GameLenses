import { GameLensType } from "../../GameLensType";

interface Props {
  cardInfo: GameLensType;
  score: number
}

const GameLensCard_Info: React.FC<Props> = ({ cardInfo, score = 0 }) => {
  return (
    <div className={"game_card_info"}>
      <div className={"game_card_info_top"}>
        <label className={"title"}>{cardInfo.title}</label>
      </div>

      <div className={"game_card_info_mid"}>
        <div
        className="advice"
        >
        <label
        
        >{cardInfo.advice}</label>
        </div>
        
      </div>

      <div className={"game_card_info_bottom"}>Score: {score}</div>
    </div>
  );
};

export default GameLensCard_Info;
