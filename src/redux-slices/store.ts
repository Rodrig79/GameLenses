
import storage from 'redux-persist/lib/storage'; // Default: localStorage if web, AsyncStorage if React Native
import { persistStore, persistReducer } from 'redux-persist';
import { configureStore, combineReducers,  ThunkAction, Action } from '@reduxjs/toolkit';
import { userDataTransform } from "./redux-transforms";
import userDataReducer from "./user-data/UserDataSlice";

const userDataPersistConfig = {
  key: 'userData',
  storage,
  transforms: [userDataTransform], // Include your custom transform here
};


const persistedUserDataReducer = persistReducer(userDataPersistConfig, userDataReducer);

const rootReducer = {
  // other reducers
  userData: persistedUserDataReducer,

};

const persistedReducer = persistReducer({ key: 'root', storage }, combineReducers(rootReducer));

export function makeStore() {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({
        thunk: true,
        immutableCheck: false,
        serializableCheck: false,
      }),
    devTools: process.env.NODE_ENV !== 'production',
  });

  return store;
}

const store = makeStore();
export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
