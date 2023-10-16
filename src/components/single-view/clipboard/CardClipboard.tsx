import { useEffect, useState } from "react";
import { GameLensType } from "../../GameLensType";
import { CardArray } from "../../../CardArray";

interface Props {
  cardInfo: GameLensType;
}

const CardClipboard: React.FC<Props> = ({ cardInfo }) => {
  const index = cardInfo.index;
  const [clipboard, setClipboard] = useState("");

  const clipboardPrefix =
    "Can you summarize this lens in 3 sentences as best as you can. " +
    "Please condense it and use simplest language as you can while retaining the ideas as much as possible. (No need to introduce the name of lens, just dive straight into how to apply it) " 
  useEffect(() => {
    const newCardInfo = CardArray?.[index-1];
    const title = newCardInfo?.cardTitle;
    const description = newCardInfo?.description;
    const advice = newCardInfo?.advice;

    var newClipboard =
      clipboardPrefix +
      `${index}. ${title}: ` +
      `${advice} ` +
      `${description} `;

    newCardInfo?.questionlist.forEach((question) => {
      newClipboard = newClipboard + ` ${question} `;
    });

    setClipboard(newClipboard);
  }, [index]);

  const onCopyTitle = async () => {
    try {
      await navigator.clipboard.writeText(`${cardInfo.title}: `); // Use Clipboard API to write to clipboard
      console.log("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const onCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(clipboard); // Use Clipboard API to write to clipboard
      console.log("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className={"single_card_clipboard"}>
      <button
        className="single_card_title_button"
        onClick={onCopyTitle} // Attach the event handler to the button
      >
        Copy Title
      </button>

      <button
        className="single_card_title_button"
        onClick={onCopyPrompt} // Attach the event handler to the button
      >
        Copy Prompt
      </button>
    </div>
  );
};

export default CardClipboard;
