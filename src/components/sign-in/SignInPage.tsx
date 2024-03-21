import {Amplify} from 'aws-amplify';
import { signInWithRedirect, signOut, getCurrentUser, AuthUser } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import { useEffect, useState } from 'react';


const SignInPage = () => {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [error, setError] = useState<unknown>(null);
    const [customState, setCustomState] = useState<string | null>("Custom State: None");
  

    useEffect(() => {
        const unsubscribe = Hub.listen("auth", ({ payload }) => {
          switch (payload.event) {
            case "signInWithRedirect":
              getUser();
              break;
            case "signInWithRedirect_failure":
              setError("An error has occurred during the OAuth flow.");
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
          setUser(currentUser);
        } catch (error) {
          console.error(error);
          console.log("Not signed in");
        }
      };


return(
    <div>
      <button onClick={() => signInWithRedirect({ customState: "Custome State: shopping-cart"})}>Open Hosted UI</button>
      <button onClick={() => signInWithRedirect({ provider: "Google", customState: "shopping-cart" })}>
        Open Google
      </button>
      <button onClick={() => signOut()}>Sign Out</button>
      <div>{user?.username}</div>
      <div>{customState}</div>
    </div>
  );
};

export default SignInPage;
