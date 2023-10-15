import { useEffect, useState } from "react";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import PageButtons from "../PageButtons";
import "./SingleCardView.css";
import { GameLensType } from "../GameLensType";
import { CardArray } from "../../CardArray";

interface Props {}

const SingleCardView: React.FC<Props> = ({}) => {
  const [index, setIndex] = useState(0);
  const [cardInfo, setCardInfo] = useState<GameLensType>(CardArray[0]);

  const [clipboard, setClipboard] = useState("");

  const clipboardPrefix =
    "Can you summarize this lens in 3 sentences as best as you can. " +
    "Please condense it and use simplest language as you can while retaining the ideas as much as possible. (No need to introduce the name of lens, just dive straight into how to apply it) "
    useEffect(() => {
      const newCardInfo = CardArray?.[index];
      setCardInfo(newCardInfo);
      const title = newCardInfo?.cardTitle;
      const description = newCardInfo?.description;
      const advice = newCardInfo?.advice;

      var newClipboard =
        clipboardPrefix +
        `${index + 1}. ${title}: ` +
        `${advice} ` +
        `${description} `;

      newCardInfo?.questionlist.forEach((question) => {
        newClipboard = newClipboard + ` ${question} `;
      });

      setClipboard(newClipboard);
    }, [index]);

  return (
    <div className={"container"}>
      <CardHeader cardInfo={cardInfo} clipboard={clipboard} />
      <CardBody cardInfo={cardInfo} />
      <CardFooter cardInfo={cardInfo} />
      <PageButtons index={index} setIndex={setIndex} />
    </div>
  );
};

export default SingleCardView;
