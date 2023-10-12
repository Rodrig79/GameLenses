import { useEffect, useState } from "react";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import PageButtons from "../PageButtons";
import "./SingleCardView.css";
import { GameLensType } from "../GameLensType";
import { CardArray } from "../../CardArray";

interface Props{

}

const SingleCardView: React.FC<Props> = ({}) => {

  const [index, setIndex] = useState(0);
  const [cardInfo, setCardInfo] = useState<GameLensType>(CardArray[0]);

  const [clipboard, setClipboard] = useState("");

  const clipboardPrefix =
    "Can you summarize this lens in one sentence as if you were giving advice to a game designer. " +
    "Please condense it and use simplest language as you can while retaining the ideas as much as possible. (No need to introduce the name of lens, just dive straight into how to apply it) " +
    "Make it sound inspiring / motivating/ exciting, use exclamation points if possible: " +
    "Can you also append a number inside of parenthesis next to a star emoji from 1 to 10 at the end of your output on a rough guess at how valuable this advice is. (1:Not important, 10:Very important). Be critical dont just give 10s to everything. Thanks!: ";


  useEffect(() => {
    const newCardInfo = CardArray?.[index];
    setCardInfo(newCardInfo);
    const title = newCardInfo?.cardTitle;
    const description = newCardInfo?.description;
    

    var newClipboard =  clipboardPrefix + `${index +1 }. ${title}: ` + `${description} `;

    newCardInfo?.questionlist.forEach((question) => {
      newClipboard = newClipboard + ` ${question} `;
    });

    setClipboard(newClipboard);
  }, [index]);



  return(
    <div className={"container"} >
      <CardHeader cardInfo={cardInfo} clipboard={clipboard} />
      <CardBody cardInfo={cardInfo} />
      <CardFooter cardInfo={cardInfo} />
      <PageButtons index={index} setIndex={setIndex} />
    </div>
  )
};

export default SingleCardView;
