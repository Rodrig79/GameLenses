import "./GameLensCard.scss";
import { CardArray } from "../../CardArray";
import GameLensCard_Image from "./image/GameLensCard_Image";
import GameLensCard_Info from "./info/GameLensCard_Info";

interface Props {
  index: number;
}

const GameLensCard: React.FC<Props> = ({ index = 0 }) => {
  const cardInfo = CardArray?.[index];

  return (
    <div className={"game_card"}>
      <div className={"game_card_left"}>
        <GameLensCard_Image cardInfo={cardInfo} />
      </div>
      <div className={"game_card_right"}>
        <GameLensCard_Info cardInfo={cardInfo} />
      </div>
    </div>
  );
};

export default GameLensCard;
