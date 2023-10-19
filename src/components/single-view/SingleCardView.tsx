import { useEffect, useState } from "react";
import "./SingleCardView.scss";
import { GameLensType } from "../GameLensType";
import { CardArray } from "../../CardArray";
import CardTitle from "./title/CardTitle";
import CardImage from "./image/CardImage";
import { useAppSelector } from "../../redux-slices/hooks";
import { selectCardIndex } from "../../redux-slices/user-data/UserDataSlice";
import SingleCard_Body from "./body/SingleCard_Body";
import SingleCard_Footer from "./footer/SingleCard_Footer";

interface Props {}

const SingleCardView: React.FC<Props> = ({}) => {
  const cardIndex = useAppSelector(selectCardIndex);
  const [cardInfo, setCardInfo] = useState<GameLensType>(CardArray[0]);
  const [view, setView] = useState<SingleViewType>("advice");

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
            <SingleCard_Body cardInfo={cardInfo} view={view}/>
            <SingleCard_Footer view={view} setView={setView}/>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleCardView;
