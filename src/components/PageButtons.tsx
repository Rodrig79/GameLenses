import "../styles.scss";
import { CardArray } from "../CardArray";
import { useState } from "react";

interface Props {
  index: number;
  setIndex: (arg0: number) => void;
}

const PageButtons: React.FC<Props> = ({ index, setIndex }) => {
  const [inputValue, setInputValue] = useState(index.toString());

  const pageDown = () => {
    var newIndex = index;
    if (index > 0) {
      newIndex = index - 1;
    }
    setInputValue(newIndex.toString());
    setIndex(newIndex);
  };

  const pageUp = () => {
    var newIndex = index;

    if (index < CardArray.length) {
      newIndex = index + 1;
    } else {
      newIndex = CardArray.length - 1;
    }
    setInputValue(newIndex.toString());
    setIndex(newIndex);
  };

  const handleInputSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    var newValue = parseInt((event.target as HTMLInputElement).value, 10); // Note the `as HTMLInputElement` type assertion
    if (newValue >= CardArray.length) {
      newValue = CardArray.length - 1;
    } else if (newValue < 0) {
      newValue = 0;
    }
    setInputValue(newValue);
    setIndex(newValue);
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
