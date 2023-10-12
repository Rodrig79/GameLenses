import { GameLensType } from "../GameLensType";

interface Props {
  cardInfo: GameLensType;
}

const CardFooter: React.FC<Props> = ({ cardInfo }) => {
  return (
    <div className="footer">
      {cardInfo?.questionlist &&
        cardInfo?.questionlist.map((question) => <label>{question}</label>)}
    </div>
  );
};

export default CardFooter;
