import {SerializedError} from "@reduxjs/toolkit";

import {CandidateInfoType, PipelineStepType} from "../../API/schema/types";
import {APILoadingStateType} from "../types";
import {PipelineTableTabType} from "../UIStore/types";

export type CandidatesStoreStateType = {
  candidatesData: CandidateInfoType[];
  candidatesDataStepMap: StepMapType;
  candidatesDataLoading: APILoadingStateType;
  candidatesDataError: null | SerializedError;
}

export type StepMapType = {
  [key in PipelineTableTabType]: CandidateInfoType[];
};

export type UseCandidatesStoreReturnType = {
  candidatesData: CandidatesStoreStateType["candidatesData"];
  candidatesDataStepMap: CandidatesStoreStateType["candidatesDataStepMap"];
  candidatesDataIsLoading: CandidatesStoreStateType["candidatesDataLoading"];
  candidatesDataError: CandidatesStoreStateType["candidatesDataError"];
  fetchCandidatesData(): void;
  updateCandidateStep(props: UpdateCandidatePropType): void;
}

export type UpdateCandidatePropType = {
  id: CandidateInfoType["id"];
  step: PipelineStepType;
}
