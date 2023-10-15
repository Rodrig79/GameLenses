import { GameLensType } from "../../GameLensType";

interface Props {
  cardInfo: GameLensType;
}

const CardQuestions: React.FC<Props> = ({ cardInfo }) => {
  return (
    <div className="single_card_questions">
      {cardInfo?.questionlist &&
        cardInfo?.questionlist.map((question) => <label>{question}</label>)}
    </div>
  );
};

export default CardQuestions;
