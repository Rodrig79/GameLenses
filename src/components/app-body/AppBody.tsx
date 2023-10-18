import { useAppSelector } from "../../redux-slices/hooks";
import { selectViewMode } from "../../redux-slices/user-data/UserDataSlice";
import MultiCardView from "../multi-view/MultiCardView";
import ScoreboardView from "../scoreboard-view/ScoreboardView";
import SingleCardView from "../single-view/SingleCardView";

interface Props {}

const AppBody: React.FC<Props> = ({}) => {
  const viewMode = useAppSelector(selectViewMode);

  return (
    <>
      {viewMode === "multi" ? (
        <MultiCardView />
      ) : viewMode === "single" ? (
        <SingleCardView />
      ) : (
        <ScoreboardView />
      )}
    </>
  );
};

export default AppBody;
