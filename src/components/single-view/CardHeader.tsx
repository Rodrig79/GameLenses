import { GameLensType } from "../GameLensType";

interface Props {
  cardInfo: GameLensType;
  clipboard: string;
}

const CardHeader: React.FC<Props> = ({ cardInfo, clipboard = "" }) => {
  


  var categoryID = "";
  cardInfo?.suitlist?.forEach((category) => {
    categoryID = categoryID + `${category} - `;
  });

  const onCopyTitle = async () => {
    try {
      await navigator.clipboard.writeText(`${cardInfo.title}: `); // Use Clipboard API to write to clipboard
      console.log("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }

  const onCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(clipboard); // Use Clipboard API to write to clipboard
      console.log("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }

  return (
    <div className="header">
      <button 
        className="clipboard_button"
        onClick={onCopyTitle}  // Attach the event handler to the button
      >Copy Title</button>

      <button 
        className="clipboard_button"
        onClick={onCopyPrompt}  // Attach the event handler to the button
      >Copy Prompt</button>
      <h3>
        {categoryID} {cardInfo?.index}. {cardInfo?.cardTitle}
      </h3>
    </div>
  );
};

export default CardHeader;
