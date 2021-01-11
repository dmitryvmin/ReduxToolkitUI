import React, {FC} from 'react';
import {format} from "date-fns";

import {useCandidatesStore} from "../../store/candidates/useCandidatesStore";
import * as styles from "./styles.module.less";
import {useUIStore} from "../../store/UI/useUIStore";
import {PipelineStepEnum} from "../../API/schema/constants";

function formatDateCol(time_interview: string) {
  try {
    return format(new Date(time_interview), 'EEE, LLL L');
  }
  catch (err) {
    console.log("error formatting date col", time_interview);
    return;
  }
}

export const PipelineTable: FC<{}> = () => {

  /**
   * ==== State ====
   */
  const {
    candidatesDataStepMap,
    candidatesDataIsLoading,
    candidatesDataError,
    updateCandidateStep,
  } = useCandidatesStore();

  const {
    activeStep,
  } = useUIStore();

  /**
   * ==== Return JSX
   */

    // TODO: move into separate component...
  const Row = ({col1, col2, col3, className}: any) => {
    return (
      <div className={`${styles.Row} ${className ? className : ''}`}>
        {col1 && <div className={styles.Col1}>{col1}</div>}
        {col1 && <div className={styles.Col2}>{col2}</div>}
        {col1 && <div className={styles.Col3}>{col3}</div>}
      </div>
    )
  }

  // TODO: move into separate component...
  const DropdownMenu = ({step, id}) => {
    return (
      <select
        className={`${styles.Select} ${(step === 'Choose Step' || step === '') ? styles.deselected : ''}`}
        value={step}
        onChange={(ev) => updateCandidateStep({
          id,
          step: ev.target.value,
        })}
      >
        {PipelineStepEnum.map((option) =>
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        )}
      </select>
    )
  }

  return (
    <div className={styles.PipelineTable}>
      <Row
        col1="Candidate"
        col2="Date Interviewed"
        className={styles.Header}
      />
      {candidatesDataError && (
        <div className={styles.Error}>
          Server error, refresh the page
        </div>
      )}
      {candidatesDataIsLoading
        ? (
          <div className={styles.Loader}>
            loading...
          </div>
        )
        : candidatesDataStepMap[activeStep].map((candidateInfo, idx) =>
          <Row
            key={`candidate-${idx}`}
            col1={candidateInfo.name}
            col2={formatDateCol(candidateInfo.time_interview)}
            col3={DropdownMenu(candidateInfo)}
          />
        )}
    </div>
  );
};