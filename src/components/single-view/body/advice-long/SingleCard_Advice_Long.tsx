import { GameLensType } from "../../../GameLensType";

interface Props{
    cardInfo: GameLensType
}

const SingleCard_Advice_Long: React.FC<Props> = ({
    cardInfo
}) => {

  return(
    <label>{cardInfo.adviceLong}</label>
  )
};

export default SingleCard_Advice_Long;
