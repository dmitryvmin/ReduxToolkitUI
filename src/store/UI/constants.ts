import {PipelineStepEnum} from "../../API/schema/constants";

export const PipelineTabsEnum = [
  'All Candidates',
    ...PipelineStepEnum,
] as const;
