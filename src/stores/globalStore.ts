import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import logger from 'redux-logger';
import {persistReducer} from 'redux-persist';
import {combineReducers} from "redux";
import storage from 'redux-persist/lib/storage'

import {dataStore} from "./dataStore/slices";
import {UIStore} from "./UIStore/slices";

const persistConfig = {
  key: 'root',
  storage,
};

const baseReducer = combineReducers({
  dataStore: dataStore.reducer,
  UIStore: UIStore.reducer,
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
