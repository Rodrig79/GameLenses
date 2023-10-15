import { useEffect, useState } from "react";
import PageButtons from "../PageButtons";
import "./SingleCardView.scss";
import { GameLensType } from "../GameLensType";
import { CardArray } from "../../CardArray";
import CardQuestions from "./questions/CardQuestions";
import CardDescription from "./description/CardDescription";
import CardTitle from "./title/CardTitle";
import CardImage from "./image/CardImage";
import CardClipboard from "./clipboard/CardClipboard";

interface Props {}

const SingleCardView: React.FC<Props> = ({}) => {
  const [index, setIndex] = useState(0);
  const [cardInfo, setCardInfo] = useState<GameLensType>(CardArray[0]);

  useEffect(() => {
    const newCardInfo = CardArray?.[index];
    setCardInfo(newCardInfo);

  }, [index]);

  return (
    <div className={"single_card"}>
      <CardTitle cardInfo={cardInfo}  />
      <CardImage cardInfo={cardInfo}/>
      <CardClipboard cardInfo={cardInfo} />
      <CardDescription cardInfo={cardInfo} />
      <CardQuestions cardInfo={cardInfo} />
      <PageButtons index={index} setIndex={setIndex} />
    </div>
  );
};

export default SingleCardView;
