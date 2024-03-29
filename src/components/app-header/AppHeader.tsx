import { signOut } from "aws-amplify/auth";
import { useAppDispatch, useAppSelector } from "../../redux-slices/hooks";
import {
  selectUserInfo,
  setUserInfo,
  setViewMode,
} from "../../redux-slices/user-data/UserDataSlice";
import "./AppHeader.scss";
import { Icon } from "@iconify/react";

interface Props {}

const AppHeader: React.FC<Props> = ({}) => {
  const dispatch = useAppDispatch();

  const userInfo = useAppSelector(selectUserInfo);
  const handleSignOut = async () => {
    try {
      // Create an iframe and set Google's logout URL
      const iframe = document.createElement("iframe");
      iframe.style.display = "none"; // Hide the iframe
      iframe.src = "https://accounts.google.com/logout";
      document.body.appendChild(iframe);

      // Wait for the iframe to load Google's logout page
      iframe.onload = async () => {
        // Remove the iframe from the document
        document.body.removeChild(iframe);

        // Proceed with your app's logout process
        await signOut();
        dispatch(setUserInfo(null));
        dispatch(setViewMode("sign_in"))
        window.location.href = "/";
      };
    } catch (error) {
      console.error("Error signing out: ", error);
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
        <Icon
          icon={"noto:ballot-box-with-ballot"}
          className={"app_header_icon"}
        />
        Vote
      </button>

      <button
        className="app_header_button"
        onClick={() => {
          dispatch(setViewMode("single"));
        }}
      >
        <Icon
          icon={"noto:magnifying-glass-tilted-right"}
          className={"app_header_icon"}
        />
        Browse
      </button>
      <button
        className="app_header_button"
        onClick={() => {
          dispatch(setViewMode("score"));
        }}
      >
        <Icon icon={"noto:trophy"} className={"app_header_icon"} />
        Scores
      </button>

      {userInfo ? (
        <button
          className="app_header_button"
          onClick={() => {
            handleSignOut();
          }}
        >
          <Icon icon={"noto:door"} className={"app_header_icon"} />
          Sign out
        </button>
      ) : (
        <button
          className="app_header_button"
          onClick={() => {
            dispatch(setViewMode("sign_in"))
          }}
        >
          <Icon icon={"noto:key"} className={"app_header_icon"} />
          Sign In
        </button>
      )}
    </div>
  );
};

export default AppHeader;
