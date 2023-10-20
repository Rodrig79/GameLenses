import { useEffect, useState } from "react";
import { GameLensType } from "../../../GameLensType";
import { useAppDispatch, useAppSelector } from "../../../../redux-slices/hooks";
import {
  selectNoteboook,
  setNotebook,
} from "../../../../redux-slices/user-data/UserDataSlice";
import { NotebookType } from "../../../../types/NotebookType";

interface Props {
  cardInfo: GameLensType;
}

const SingleCard_Notes: React.FC<Props> = ({ cardInfo }) => {
  const notebook: NotebookType = useAppSelector(selectNoteboook);
  const index = cardInfo.index;
  const [textInput, setTextInput] = useState(notebook?.[index]?.note);
  const [showSaveButton, setShowSaveButton] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (notebook?.[index]?.note) {
      setTextInput(notebook[index].note);
    } else {
      setTextInput("");
    }
  }, [cardInfo, notebook]);

  const onChange = (event: React.ChangeEvent) => {
    setTextInput(event.target.ariaValueText);
    setShowSaveButton(true);
  };

  const handleSave = () => {
    const newNotebook: NotebookType = {
      ...notebook,
      [index]: {
        index: index,
        note: textInput,
      },
    };
    dispatch(setNotebook(newNotebook));
  };

  const handleCancel = () => {
    if (notebook?.[index]?.note) {
        setTextInput(notebook[index].note);
      } else {
        setTextInput("");
      }
  };

  return (
    <div className="single_card_notes">
      <input
        value={textInput}
        onChange={(event) => {
          onChange(event);
        }}
      />
      {showSaveButton && (
        <div>
          <button
          onClick={()=>{
            handleCancel()
          }}
          >Cancel</button>
          <button
            onClick={() => {
              handleSave();
            }}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default SingleCard_Notes;
