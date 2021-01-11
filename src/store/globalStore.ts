import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import logger from 'redux-logger';
import {persistReducer} from 'redux-persist';
import {combineReducers} from "redux";
import storage from 'redux-persist/lib/storage'

import {candidatesSlice} from "./candidates/slices";
import {UISlice} from "./UI/slices";

const persistConfig = {
  key: 'root',
  storage,
};

const baseReducer = combineReducers({
  candidates: candidatesSlice.reducer,
  UI: UISlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, baseReducer);

const globalStore = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware(),
    logger,
  ],
});

export {globalStore};
