import {createSlice} from '@reduxjs/toolkit';

import {UIStoreStateType} from "./types"
import {PipelineTabsEnum} from "./constants";

export const initialState: UIStoreStateType = {
  activeStep: PipelineTabsEnum[0],
};

export const UISlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    setActiveStep: (state, action) => {
      state.activeStep = action.payload;
    }
  },
});

export const { setActiveStep } = UISlice.actions;

