import { signOut } from "aws-amplify/auth";
import { useAppDispatch } from "../../redux-slices/hooks";
import {
  setUserInfo,
  setViewMode,
} from "../../redux-slices/user-data/UserDataSlice";
import "./AppHeader.scss";

interface Props {}

const AppHeader: React.FC<Props> = ({}) => {
  const dispatch = useAppDispatch();

  const handleSignOut = async () => {
    try {
      // Assuming you're using an async signOut function
      await signOut();
      // Update local state or context to reflect that the user is no longer authenticated
      dispatch(setUserInfo(null)); 
      // Optionally, force a reload or redirect the user to a public page
      window.location.href = '/'; // Redirect to home or login page
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <div className="app_header">
      <button
        className="app_header_button"
        onClick={() => {
          dispatch(setViewMode("multi"));
        }}
      >
        Multi-View
      </button>

      <button
        className="app_header_button"
        onClick={() => {
          dispatch(setViewMode("single"));
        }}
      >
        Single-View
      </button>
      <button
        className="app_header_button"
        onClick={() => {
          dispatch(setViewMode("score"));
        }}
      >
        Scoreboard
      </button>

      <button
        onClick={() => {
         handleSignOut()
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default AppHeader;
