import { GameLensType } from "../../GameLensType";

interface Props {
  cardInfo: GameLensType;
}

const GameLensCard_Info: React.FC<Props> = ({ cardInfo }) => {
  return (
    <div className={"game_card_info"}>
      <div className={"game_card_info_top"}>
        <label>{cardInfo.title}</label>
      </div>

      <div className={"game_card_info_mid"}>
        <label>{cardInfo.description}</label>
      </div>

      <div className={"game_card_info_bottom"}></div>
    </div>
  );
};

export default GameLensCard_Info;
