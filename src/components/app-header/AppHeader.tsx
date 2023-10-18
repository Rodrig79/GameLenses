import { useAppDispatch } from '../../redux-slices/hooks';
import { setViewMode } from '../../redux-slices/user-data/UserDataSlice';
import { ViewModeType } from '../../types/ViewModeType';
import './AppHeader.scss';

interface Props{
}

const AppHeader: React.FC<Props> = ({}) => {

  const dispatch = useAppDispatch()

  return(
    <div className="app_header">
    <button
    className="app_header_button"
      onClick={() => {
        dispatch(setViewMode("multi"))
        
      }}
    >
      Multi-View
    </button>

    <button
    className="app_header_button"
      onClick={() => {
        dispatch(setViewMode("single"))
      }}
    >
      Single-View
    </button>
    <button
    className="app_header_button"
      onClick={() => {
        dispatch(setViewMode("score"))
      }}
    >
      Scoreboard
    </button>
  </div>
  )
};

export default AppHeader;
