import {PipelineTabsEnum} from "./constants";

export type PipelineTableTabType = typeof PipelineTabsEnum[number];

export type UIStoreStateType = {
  activeStep: PipelineTableTabType;
}

export type UseUIStoreReturnType = {
  activeStep: UIStoreStateType["activeStep"];
  setActiveStep(arg: UIStoreStateType["activeStep"]): void;
}