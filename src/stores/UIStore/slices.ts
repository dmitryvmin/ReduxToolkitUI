import {createSlice} from '@reduxjs/toolkit';

import {UIStoreStateType} from "./types"
import {PipelineTabsEnum} from "./constants";

export const initialState: UIStoreStateType = {
  activeStep: PipelineTabsEnum[0],
};

export const UIStore = createSlice({
  name: 'UIStore',
  initialState,
  reducers: {
    setActiveStep: (state, action) => {
      state.activeStep = action.payload;
    }
  },
});

export const { setActiveStep } = UIStore.actions;

