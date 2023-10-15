import "./GameLensCard.scss";
import { CardArray } from "../../CardArray";
import GameLensCard_Image from "./image/GameLensCard_Image";
import GameLensCard_Info from "./info/GameLensCard_Info";
import { useAppSelector } from "../../redux-slices/hooks";
import { selectScoreboard } from "../../redux-slices/user-data/UserDataSlice";
import { ScoreboardType } from "../../types/ScoreboardType";

interface Props {
  index: number;
  bgColor?: "red" | "blue";
}

const GameLensCard: React.FC<Props> = ({ index = 0, bgColor = "red" }) => {
  const cardInfo = CardArray?.[index];
  const scoreboard:ScoreboardType = useAppSelector(selectScoreboard)
  const score = scoreboard[index]?.score

  return (
    <div className={bgColor === "red" ? "game_card" : "game_card_blue"}>
      <div className={"game_card_left"}>
        <GameLensCard_Image cardInfo={cardInfo} />
      </div>
      <div className={"game_card_right"}>
        <GameLensCard_Info cardInfo={cardInfo} score={score}/>
      </div>
    </div>
  );
};

export default GameLensCard;
