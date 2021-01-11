import {useCallback} from "react";
import { useDispatch, useSelector } from 'react-redux';

import {activeStep} from "./selectors";
import {setActiveStep} from "./slices"
import {UseUIStoreReturnType} from "./types";

export const useUIStore = (): UseUIStoreReturnType => {

  /**
   * ==== Redux state and dispatch ====
   */
  const dispatch = useDispatch();

  /**
   * ==== Selectors ====
   */
  const _activeStep = useSelector(activeStep);

  /**
   * ==== Dispatchers ====
   */
  const _setActiveStep = useCallback(
     (activeStep) => dispatch(setActiveStep(activeStep)),
    [
      dispatch,
    ],
  );

  /**
   * ==== Hook utils ====
   */
  return ({
    activeStep: _activeStep,
    setActiveStep: _setActiveStep,
  })
}