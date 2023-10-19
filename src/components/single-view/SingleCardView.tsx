import { useEffect, useState } from "react";
import "./SingleCardView.scss";
import { GameLensType } from "../GameLensType";
import { CardArray } from "../../CardArray";
import CardQuestions from "./questions/CardQuestions";
import CardDescription from "./description/CardDescription";
import CardTitle from "./title/CardTitle";
import CardImage from "./image/CardImage";
import CardClipboard from "./clipboard/CardClipboard";
import { useAppSelector } from "../../redux-slices/hooks";
import { selectCardIndex } from "../../redux-slices/user-data/UserDataSlice";
import SingleCard_Footer from "./footer/SingleCard_Footer";

interface Props {}

const SingleCardView: React.FC<Props> = ({}) => {
  const cardIndex = useAppSelector(selectCardIndex);
  const [cardInfo, setCardInfo] = useState<GameLensType>(CardArray[0]);

  useEffect(() => {
    if (!cardIndex) {
      return;
    }
    const newCardInfo = CardArray?.[cardIndex];
    setCardInfo(newCardInfo);
  }, [cardIndex]);

  return (
    <>
      {cardInfo && (
        <div className={"single_card_container"}>
          <div className={"single_card"}>
            <CardTitle cardInfo={cardInfo} />
            <CardImage cardInfo={cardInfo} />
            <CardClipboard cardInfo={cardInfo} />
            <CardDescription cardInfo={cardInfo} />
            <CardQuestions cardInfo={cardInfo} />
            <SingleCard_Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default SingleCardView;
