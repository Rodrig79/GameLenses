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
      // Create an iframe and set Google's logout URL
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none'; // Hide the iframe
      iframe.src = 'https://accounts.google.com/logout';
      document.body.appendChild(iframe);
  
      // Wait for the iframe to load Google's logout page
      iframe.onload = async () => {
        // Remove the iframe from the document
        document.body.removeChild(iframe);
  
        // Proceed with your app's logout process
        await signOut();
        dispatch(setUserInfo(null));
        window.location.href = '/';
      };
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
