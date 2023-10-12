import { GameLensType } from "../GameLensType";

interface Props {
  cardInfo: GameLensType;
}

const CardBody: React.FC<Props> = ({ cardInfo }) => {
  return (
    <div className="body">
      <img
        src={`/lens-art/${cardInfo.imageID}.png`}
        alt={`${cardInfo.imageID}`}
      />
      <label>{cardInfo?.description}</label>
    </div>
  );
};

export default CardBody;
