import { useEffect, useState } from "react";
import { GameLensType } from "../../../GameLensType";

interface Props {
  cardInfo: GameLensType;
}

const MultiCard_Info: React.FC<Props> = ({ cardInfo }) => {
  const [expandAdvice, setExpandAdvice] = useState(false);

  useEffect(()=>{
    setExpandAdvice(false)
  }, [cardInfo])

  

  return (
    <div className={"multi_card_info"}>
      <div className={"multi_card_info_top"}>
        <label className={"title"}>
          {cardInfo.index}. {cardInfo.title}
        </label>
      </div>

      <button
        className={"multi_card_info_mid"}
        onClick={() => {
          setExpandAdvice(!expandAdvice);
        }}
      >
        <div className="advice">
          <label className={expandAdvice ? "advice_long" : "advice_short"}>
            {expandAdvice ? cardInfo.adviceLong : cardInfo.advice}
          </label>
        </div>
      </button>
    </div>
  );
};

export default MultiCard_Info;
