import { GameLensType } from "../../GameLensType";
import SingleCard_Advice from "./advice/SingleCard_Advice";
import SingleCard_Advice_Long from "./advice-long/SingleCard_Advice_Long";
import CardQuestions from "./questions/CardQuestions";
import SingleCard_Notes from "./notes/SingleCard_Notes";

interface Props {
  cardInfo: GameLensType;
  view: SingleViewType;
}

const SingleCard_Body: React.FC<Props> = ({ cardInfo, view }) => {
  return (
    <div className={"single_card_body"}>
      <div className={"single_card_body_content"}>
        {view === "advice" ? (
          <SingleCard_Advice cardInfo={cardInfo} />
        ) : view === "advice-long" ? (
          <SingleCard_Advice_Long cardInfo={cardInfo} />
        ) : view === "questions" ? (
          <>
            <CardQuestions cardInfo={cardInfo} />
          </>
        ) : view === "notes" ? (
          <SingleCard_Notes cardInfo={cardInfo}/>
        ) : null}
      </div>
    </div>
  );
};

export default SingleCard_Body;
