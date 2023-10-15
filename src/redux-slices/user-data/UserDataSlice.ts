import { createSlice, PayloadAction } from "@reduxjs/toolkit";


import type { AppState } from "../store";
import { ScoreboardType } from "../../types/ScoreboardType";
import { NotebookType } from "../../types/NotebookType";

export interface UserDataState {
  userID: string;
  scoreboard: ScoreboardType;
  notebook: NotebookType
 
}

const initialState: UserDataState = {
  userID: null,
  scoreboard: {},
  notebook: {}

};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setUserID: (state, action: PayloadAction<any>) => {
      state.userID = action.payload;
    },

    setScoreboard: (state, action: PayloadAction<ScoreboardType>) => {
      state.scoreboard = action.payload;
    },


    setNotebook: (state, action: PayloadAction<NotebookType>) => {
      state.notebook = action.payload;
    },

  }
});

export const {
  setUserID,
  setScoreboard,
  setNotebook

} = userDataSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUserID = (state: AppState) => state.userData.userID;
export const selectScoreboard = (state: AppState) => state.userData.scoreboard;
export const selectNoteboook = (state: AppState) => state.userData.notebook;


export default userDataSlice.reducer;
