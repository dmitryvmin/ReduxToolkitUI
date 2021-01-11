import {CandidateInfoType} from "../../../API/schema/types";
import {StepMapType} from "../types";

export function groupCandidatesDataByStep(
  candidates: CandidateInfoType[],
) {

  const stepMap: StepMapType = {
    'All Candidates': candidates,
    'Paperwork': [],
    'Background Check': [],
    'Drug Test': [],
    'Choose Step': [],
  }

  for (let i = 0; i < candidates?.length; i++) {

    // Get current candidate info object
    const candidate = candidates[i];

    // If step field value exists, save to that map key.
    // Otherwise, undefined value are grouped under 'Choose Step' key.
    // Would have been better to make PipelineTabsEnum an object instead of an array.
    const mapKey = candidate.step || 'Choose Step';

    // Update the count of this step type
    stepMap[mapKey].push(candidate);
  }

  return stepMap;
}