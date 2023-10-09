import "../styles.scss";
import { GameLensType } from "./GameLensType";

interface Props {
  cardInfo: GameLensType;
}

const CardBody: React.FC<Props> = ({ cardInfo }) => {
  return (
    <div className="body">
      <label>{cardInfo?.description}</label>
    </div>
  );
};

export default CardBody;
