import {SerializedError} from "@reduxjs/toolkit";

import {CandidateInfoType, PipelineStepType} from "../../API/schema/types";
import {APILoadingStateType} from "../types";
import {PipelineTableTabType} from "../UI/types";

export type CandidatesStoreStateType = {
  data: CandidateInfoType[];
  dataStepMap: StepMapType;
  loading: APILoadingStateType;
  error: null | SerializedError;
}

export type StepMapType = {
  [key in PipelineTableTabType]: CandidateInfoType[];
};

export type UseCandidatesStoreReturnType = {
  candidatesData: CandidatesStoreStateType["data"];
  candidatesDataStepMap: CandidatesStoreStateType["dataStepMap"];
  candidatesDataIsLoading: CandidatesStoreStateType["loading"];
  candidatesDataError: CandidatesStoreStateType["error"];
  fetchCandidatesData(): void;
  updateCandidateStep(props: UpdateCandidatePropType): void;
}

export type UpdateCandidatePropType = {
  id: CandidateInfoType["id"];
  step: PipelineStepType;
}
