import {createSlice} from '@reduxjs/toolkit';

import {fetchCandidatesData, _updateCandidateStep} from "./thunks";
import {CandidatesStoreStateType} from "./types";
import {groupCandidatesDataByStep} from "./_utils/groupCandidatesDataByStep";
import {updateStepField} from "./_utils/updateStepField";

const initialState: CandidatesStoreStateType = {
  candidatesData: [],
  candidatesDataStepMap: {
    'All Candidates': [],
    'Paperwork': [],
    'Background Check': [],
    'Drug Test': [],
    'Choose Step': [],
  },
  candidatesDataLoading: 'idle',
  candidatesDataError: null,
};

export const dataStore = createSlice({
  name: 'dataStore',
  initialState,
  reducers: {
    // TODO: this call would be set up like the fetchCandidatesData methods below
    // and would use the commented out 'updateCandidateStep' from /thunks.ts
    updateCandidateStep(state, action) {
      const _data = updateStepField(state.candidatesData, action.payload);
      state.candidatesData = _data;
      state.candidatesDataStepMap = groupCandidatesDataByStep(_data);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCandidatesData.fulfilled, (state, action) => {
      if (state.candidatesDataLoading === 'pending') {
        state.candidatesDataLoading = 'idle';
        state.candidatesData = action.payload;
        state.candidatesDataStepMap = groupCandidatesDataByStep(action.payload);
      }
    });
    builder.addCase(fetchCandidatesData.pending, (state, action) => {
      if (state.candidatesDataLoading === 'idle') {
        state.candidatesDataLoading = 'pending';
      }
    });
    builder.addCase(fetchCandidatesData.rejected, (state, action) => {
      if (state.candidatesDataLoading === 'pending') {
        state.candidatesDataLoading = 'idle';
        state.candidatesDataError = action.error;
      }
    });
  }
});

export const {updateCandidateStep} = dataStore.actions;