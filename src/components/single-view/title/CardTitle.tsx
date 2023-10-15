import { GameLensType } from "../../GameLensType";

interface Props {
  cardInfo: GameLensType;
}

const CardTitle: React.FC<Props> = ({ cardInfo }) => {
  var categoryID = "";
  cardInfo?.suitlist?.forEach((category) => {
    categoryID = categoryID + `${category} - `;
  });

  return (
    <div className="single_card_title">
      <h3>
        {categoryID} {cardInfo?.index}. {cardInfo?.cardTitle}
      </h3>
    </div>
  );
};

export default CardTitle;
