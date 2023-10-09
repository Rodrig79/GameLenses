import "../styles.scss";
import { GameLensType } from "./GameLensType";

interface Props {
  cardInfo: GameLensType;
}

const CardHeader: React.FC<Props> = ({ cardInfo }) => {
  var categoryID = "";
  cardInfo?.suitlist?.forEach((category) => {
    categoryID = categoryID + `${category} - `;
  });

  return (
    <div className="header">
      <h3>
        {categoryID} {cardInfo?.index}. {cardInfo?.cardTitle}
      </h3>
    </div>
  );
};

export default CardHeader;
