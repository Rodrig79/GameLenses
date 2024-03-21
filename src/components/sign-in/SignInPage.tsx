import {
  signInWithRedirect,
  signOut,
  getCurrentUser,
  AuthUser,
} from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux-slices/hooks";
import {
  selectUserInfo,
  setUserInfo,
} from "../../redux-slices/user-data/UserDataSlice";

const SignInPage = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUserInfo);
  const [error, setError] = useState<unknown>(null);
  const [customState, setCustomState] = useState<string | null>(
    "Custom State:"
  );

  useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload }) => {
      switch (payload.event) {
        case "signInWithRedirect":
          getUser();
          break;
        case "signInWithRedirect_failure":
          setError("An error has occurred during the OAuth flow.");
          dispatch(setUserInfo(null));

          break;
        case "customOAuthState":
          setCustomState(payload.data); // this is the customState provided on signInWithRedirect function
          break;
      }
    });

    getUser();

    return unsubscribe;
  }, []);

  const getUser = async (): Promise<void> => {
    try {
      const currentUser = await getCurrentUser();
      dispatch(setUserInfo(currentUser));
    } catch (error) {
      dispatch(setUserInfo(null));
      console.error(error);
      console.log("Not signed in");
    }
  };

  return (
    <div>
      <h1>Hello {userInfo?.username}</h1>
      <div>{customState}</div>
      <button
        onClick={() =>
          signInWithRedirect({
            provider: "Google",
            customState: "shopping-cart",
          })
        }
      >
        Sign in With Google
      </button>
    </div>
  );
};

export default SignInPage;
