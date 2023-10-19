interface Props {
  view: SingleViewType;
  setView: (view: SingleViewType) => void;
}

const SingleCard_Footer: React.FC<Props> = ({ view, setView }) => {
  const updateView = (view: SingleViewType) => {
    setView(view);
  };

  return (
    <div className={"single_card_footer"}>
      <button
        className={
          view === "advice"
            ? "single_card_footer_button_ON"
            : "single_card_footer_button"
        }
        onClick={() => {
          updateView("advice");
        }}
      >
        1️⃣
      </button>
      <button
        className={
          view === "advice-long"
            ? "single_card_footer_button_ON"
            : "single_card_footer_button"
        }
        onClick={() => {
          updateView("advice-long");
        }}
      >
        2️⃣
      </button>
      <button
        className={
          view === "questions"
            ? "single_card_footer_button_ON"
            : "single_card_footer_button"
        }
        onClick={() => {
          updateView("questions");
        }}
      >
        ❓
      </button>

      <button
        className={
          view === "notes"
            ? "single_card_footer_button_ON"
            : "single_card_footer_button"
        }
        onClick={() => {
          updateView("notes");
        }}
      >
        📝
      </button>
    </div>
  );
};

export default SingleCard_Footer;
