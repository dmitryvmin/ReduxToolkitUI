import axios from "axios";

import {CANDIDATES_PIPELINE_ENDPOINT} from "./constants";
import {UpdateCandidatePropType} from "../../store/candidates/types";

export const candidatesAPI = {
  fetchAll: async () => {
    return await axios.get(CANDIDATES_PIPELINE_ENDPOINT, {timeout: 0});
  },
  patchStepById: async ({id, step}: UpdateCandidatePropType) => {
    return await axios.patch(`${CANDIDATES_PIPELINE_ENDPOINT}/${id}`, {
      step,
    });
  },
};