import "./styles.scss";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";
import CardFooter from "./components/CardFooter";
import PageButtons from "./components/PageButtons";

import { CardArray } from "./CardArray";
import { useEffect, useState } from "react";
import { GameLensType } from "./components/GameLensType";

export default function App() {
  const [index, setIndex] = useState(0);
  const [cardInfo, setCardInfo] = useState<GameLensType>(CardArray[0]);

  useEffect(() => {
    const newCardInfo = CardArray[index];
    setCardInfo(newCardInfo);
  }, [index]);

  return (
    <div className="App">
      <CardHeader cardInfo={cardInfo} />
      <CardBody cardInfo={cardInfo} />
      <CardFooter cardInfo={cardInfo} />
      <PageButtons index={index} setIndex={setIndex} />
    </div>
  );
}
