import {createSlice} from '@reduxjs/toolkit';

import {fetchCandidatesData, updateCandidateStep} from "./thunks";
import {CandidatesStoreStateType} from "./types";
import {groupCandidatesDataByStep} from "./_utils/groupCandidatesDataByStep";
import {updateStepField} from "./_utils/updateStepField";

const initialState: CandidatesStoreStateType = {
  data: [],
  dataStepMap: {
    'All Candidates': [],
    'Paperwork': [],
    'Background Check': [],
    'Drug Test': [],
    'Choose Step': [],
  },
  loading: 'idle',
  error: null,
};

export const candidatesSlice = createSlice({
  name: 'candidates',
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder.addCase(fetchCandidatesData.fulfilled, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.data = action.payload;
        state.dataStepMap = groupCandidatesDataByStep(action.payload);
      }
    });
    builder.addCase(fetchCandidatesData.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    });
    builder.addCase(fetchCandidatesData.rejected, (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.error = action.error;
      }
    });

    // TODO: this call would be set up like the fetchCandidatesData methods above
    // and would use the commented out 'updateCandidateStep' from /thunks.ts
    builder.addCase(updateCandidateStep, (state, action) => {
      const _data = updateStepField(state, action.payload);
      state.data = _data;
      state.dataStepMap = groupCandidatesDataByStep(_data);
    })
  }
});
