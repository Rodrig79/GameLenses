import { GameLensType } from "../../GameLensType";

interface Props {
  cardInfo: GameLensType;
}

const CardImage: React.FC<Props> = ({ cardInfo }) => {
  return (
    <div className={"single_card_image"}>
      <img
        src={`/lens-art/${cardInfo.imageID}.png`}
        alt={`${cardInfo.imageID}`}
        width={300}
      />
    </div>
  );
};

export default CardImage;
