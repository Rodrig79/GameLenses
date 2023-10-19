import "./MultiCard.scss";
import { CardArray } from "../../../CardArray";
import MultiCard_Image from "./image/MultiCard_Image";
import MultiCard_Info from "./info/MultiCard_Info";
import MultiCard_Score from "./score/MultiCard_Score";

interface Props {
  index: number;
  bgColor?: "red" | "blue";
}

const MultiCard: React.FC<Props> = ({ index = 0, bgColor = "red" }) => {
  const cardInfo = CardArray?.[index];

  return (
    <div className={bgColor === "red" ? "multi_card" : "multi_card_blue"}>
      <div className={"multi_card_left"}>
        <MultiCard_Image cardInfo={cardInfo} />
      </div>
      <div className={"multi_card_right"}>
        <MultiCard_Info cardInfo={cardInfo} />

        <MultiCard_Score cardInfo={cardInfo}/>
      </div>
    </div>
  );
};

export default MultiCard;
