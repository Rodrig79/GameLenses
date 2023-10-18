import "../styles.scss";
import { CardArray } from "../CardArray";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux-slices/hooks";
import { selectCardIndex, setCardIndex } from "../redux-slices/user-data/UserDataSlice";

interface Props {

}

const PageButtons: React.FC<Props> = ({ }) => {
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

  const handleInputSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    var newValue = parseInt((event.target as HTMLInputElement).value, 10); // Note the `as HTMLInputElement` type assertion
    if (newValue >= CardArray.length) {
      newValue = CardArray.length - 1;
    } else if (newValue < 0) {
      newValue = 0;
    }
    setInputValue((newValue + 1).toString());
    dispatch(setCardIndex(newValue));
  };

  return (
    <div className="pageButtons">
      <button onClick={pageDown} className="button">
        {"<"}
      </button>
      <input
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            handleInputSubmit(event);
          }
        }}
        type="number"
      />

      <label>
        {"/"} {CardArray.length}
      </label>
      <button onClick={pageUp} className="button">
        {">"}
      </button>
    </div>
  );
};

export default PageButtons;
