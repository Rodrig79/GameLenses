import React from "react";
import { GameLensType } from "../../../GameLensType";

interface Props {
  cardInfo: GameLensType;
}

const MultiCard_Image: React.FC<Props> = ({ cardInfo }) => {

  return (
    <div className="multi_card_image">
      <img
        src={`/lens-art/${cardInfo.imageID}.png`}
        alt={`${cardInfo.imageID}`}
        width={350}
      />
    </div>
  );
};

export default MultiCard_Image;
