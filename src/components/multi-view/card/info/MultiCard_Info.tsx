import { GameLensType } from "../../../GameLensType";

interface Props {
  cardInfo: GameLensType;
}

const MultiCard_Info: React.FC<Props> = ({ cardInfo }) => {



  return (
    <div className={"multi_card_info"}>
      <div className={"multi_card_info_top"}>
        <label className={"title"}>{cardInfo.index}. {cardInfo.title}</label>
      </div>

      <div className={"multi_card_info_mid"}>
        <div className="advice">
          <label>{cardInfo.advice}</label>
        </div>
      </div>

    
    </div>
  );
};

export default MultiCard_Info;
