export const candidatesData = state => state.candidates.data;

export const candidatesDataStepMap = state => state.candidates.dataStepMap;

export const candidatesDataIsLoading = state => state.candidates.loading === "pending";

export const candidatesDataError = state => state.candidates.error;
