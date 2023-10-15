import React from "react";
import { GameLensType } from "../../GameLensType";
import "../GameLensCard.scss";

interface Props {
  cardInfo: GameLensType;
}

const GameLensCard_Image: React.FC<Props> = ({ cardInfo }) => {

  return (
    <div className="game_card_image">
      <img
        src={`/lens-art/${cardInfo.imageID}.png`}
        alt={`${cardInfo.imageID}`}
        width={350}
      />
    </div>
  );
};

export default GameLensCard_Image;
