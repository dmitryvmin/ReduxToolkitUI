import {createAsyncThunk} from "@reduxjs/toolkit";
import {candidatesAPI} from "../../API/candidatesAPI/candidatesAPI";
import {UpdateCandidatePropType} from "./types";

/**
 * Thunks
 */
export const fetchCandidatesData = createAsyncThunk(
  'dataStore/fetchCandidates',
  async () => {
    const response = await candidatesAPI.fetchAll();
    return response.data;
  },
);

// TODO: use fn below for real PATCH call
// export const updateCandidateStep = createAsyncThunk(
//   'candidates/updateCandidateStep',
//   async (props: UpdateCandidatePropType) => {
//     const response = await candidatesAPI.patchStepById(props);
//     return response.data;
//   },
// );

export const _updateCandidateStep = createAsyncThunk(
  'dataStore/updateCandidateStep',
  function prepare({id, step}: UpdateCandidatePropType, {getState}: any) {

    const _data = [...getState().data];
    const idxToUpdate = _data.findIndex((obj => obj.id === id));
    _data[idxToUpdate].step = step;

    return _data;
  });
