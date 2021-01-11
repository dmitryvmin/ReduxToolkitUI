import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import {candidatesAPI} from "../../API/candidatesAPI/candidatesAPI";
import {UpdateCandidatePropType} from "./types";

/**
 * Thunks
 */
export const fetchCandidatesData = createAsyncThunk(
  'candidates/fetchCandidates',
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

export const updateCandidateStep = createAction(
  'candidates/updateCandidateStep',
  function prepare(payload: UpdateCandidatePropType) {
    return {
      payload,
    }
  });
