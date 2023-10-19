import { GameLensType } from "../../../GameLensType";

interface Props {
  cardInfo: GameLensType;
}

const CardDescription: React.FC<Props> = ({ cardInfo }) => {
  return (
    <div className="single_card_description">
      <label>{cardInfo?.description}</label>
    </div>
  );
};

export default CardDescription;
