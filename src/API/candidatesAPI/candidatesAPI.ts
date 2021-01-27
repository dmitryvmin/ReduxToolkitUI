import axios from "axios";

import {CANDIDATES_PIPELINE_ENDPOINT} from "./constants";
import {UpdateCandidatePropType} from "../../stores/dataStore/types";
import {data} from "../data/localTestData";

export const candidatesAPI = {
  fetchAll: async () => {
    // return await axios.get(CANDIDATES_PIPELINE_ENDPOINT, {timeout: 0});
    return Promise.resolve({data});
  },
  patchStepById: async ({id, step}: UpdateCandidatePropType) => {
    return await axios.patch(`${CANDIDATES_PIPELINE_ENDPOINT}/${id}`, {
      step,
    });
  },
};