import { createTransform } from "redux-persist";
import { UserDataState } from "./user-data/UserDataSlice";

export const userDataTransform = createTransform<UserDataState, UserDataState>(
  (inboundState) => {
    return {
      ...inboundState, // keep the rest of the state unchanged
      userID: inboundState.userID,
      scoreboard: inboundState.scoreboard,
      notebook: inboundState.notebook,
    };
  },
  (outboundState, key) => {
    return {
      ...outboundState,
    };
  },
  { whitelist: ["userData"] }
);
