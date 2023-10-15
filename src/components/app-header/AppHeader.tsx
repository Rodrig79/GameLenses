import { ViewModeType } from '../../types/ViewModeType';
import './AppHeader.scss';

interface Props{
    setViewMode: (ViewModeType)=>void
}

const AppHeader: React.FC<Props> = ({setViewMode}) => {

  return(
    <div className="app_header">
    <button
    className="app_header_button"
      onClick={() => {
        setViewMode("multi");
      }}
    >
      Multi-View
    </button>

    <button
    className="app_header_button"
      onClick={() => {
        setViewMode("single");
      }}
    >
      Single-View
    </button>
    <button
    className="app_header_button"
      onClick={() => {
        setViewMode("score");
      }}
    >
      Scoreboard
    </button>
  </div>
  )
};

export default AppHeader;
