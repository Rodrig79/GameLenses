import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux-slices/hooks";
import { selectCardIndex, setCardIndex } from "../../../redux-slices/user-data/UserDataSlice";
import { GameLensType } from "../../GameLensType";
import { CardArray } from "../../../CardArray";

interface Props {
  cardInfo: GameLensType;
}

const CardTitle: React.FC<Props> = ({ cardInfo }) => {
  var categoryID = "";
  cardInfo?.suitlist?.forEach((category) => {
    categoryID = categoryID + `${category} - `;
  });

  const index = useAppSelector(selectCardIndex)
  const [inputValue, setInputValue] = useState((index + 1).toString());
  const dispatch = useAppDispatch()
  const pageDown = () => {
    var newIndex = index;
    if (index > 0) {
      newIndex = index - 1;
    }
    setInputValue((newIndex + 1).toString());
    dispatch(setCardIndex(newIndex));
  };

  const pageUp = () => {
    var newIndex = index;

    if (index < CardArray.length - 1) {
      newIndex = index + 1;
    } else {
      newIndex = CardArray.length - 1;
    }
    setInputValue((newIndex + 1 ).toString());
    dispatch(setCardIndex(newIndex));
  };


  return (
    <div className="single_card_title">
          <button onClick={pageDown} className="single_card_title_button">
        {"⬅️"}
      </button>

      <label>
    {cardInfo?.index}. {cardInfo?.cardTitle}
      </label>

      <button onClick={pageUp} className="single_card_title_button">
        {`➡️`}
      </button>
    </div>
  );
};

export default CardTitle;
