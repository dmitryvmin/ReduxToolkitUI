import {useCallback} from "react";
import { useDispatch, useSelector } from 'react-redux';

import {candidatesData, candidatesDataError, candidatesDataIsLoading, candidatesDataStepMap} from "./selectors";
import {fetchCandidatesData} from "./thunks";
import {updateCandidateStep} from "./slices";
import {UseCandidatesStoreReturnType} from "./types";

export const useCandidatesStore = (): UseCandidatesStoreReturnType => {

  /**
   * ==== Redux state and dispatch ====
   */
  const dispatch = useDispatch();

  /**
   * ==== Selectors ====
   */
  const _candidatesData = useSelector(candidatesData);
  const _candidatesDataStepMap = useSelector(candidatesDataStepMap);
  const _candidatesDataIsLoading = useSelector(candidatesDataIsLoading);
  const _candidatesDataError = useSelector(candidatesDataError);

  /**
   * ==== Dispatchers ====
   */
  const _fetchCandidatesData = useCallback(
    async () => await dispatch(fetchCandidatesData()),
    [
      dispatch,
    ],
  );

  const _updateCandidateStep = useCallback(
    async (props) => {
      return await dispatch(updateCandidateStep(props));
    },
    [
      dispatch,
    ],
  );

  /**
   * ==== Hook utils ====
   */
  return ({
    candidatesData: _candidatesData,
    candidatesDataStepMap: _candidatesDataStepMap,
    candidatesDataIsLoading: _candidatesDataIsLoading,
    fetchCandidatesData: _fetchCandidatesData,
    updateCandidateStep: _updateCandidateStep,
    candidatesDataError: _candidatesDataError,
  });
}