import {PipelineStepEnum} from "./constants";

/**
 * Schema types
 */
export type PipelineStepType = typeof PipelineStepEnum[number]

export type CandidateInfoType = {
  name: string;
  email: string;
  phone: string;
  step: PipelineStepType;
  id: number;
  time_interview: string;
  profile_url: string;
}