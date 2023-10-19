import { GameLensType } from "../../../GameLensType";

interface Props{
    cardInfo: GameLensType
}

const SingleCard_Advice: React.FC<Props> = ({
    cardInfo
}) => {

  return(
    <label>{cardInfo.advice}</label>
  )
};

export default SingleCard_Advice;
