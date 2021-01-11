import React, {FC} from "react";

import {useCandidatesStore} from "../../stores/dataStore/useCandidatesStore";

import * as styles from "./styles.module.less";
import {useUIStore} from "../../stores/UIStore/useUIStore";
import {PipelineTabsEnum} from "../../stores/UIStore/constants";

export const PipelineTabs: FC<{}> = () => {

  /**
   * ==== State ====
   */
  const {
    candidatesDataStepMap,
  } = useCandidatesStore();

  const {
    activeStep,
    setActiveStep,
  } = useUIStore();

  /**
   * ==== Return JSX
   */
  return (
    <div className={styles.Tabs}>
      <div
        className={styles.TabMarker}
        style={{
          transform: `translate(0, ${PipelineTabsEnum.indexOf(activeStep) * 40}px)`,
        }}
      />
      <div className={styles.TabNames}>
        {PipelineTabsEnum.map((tabName) => {
          return (
            <div
              key={tabName}
              className={`${styles.TabName} ${tabName === activeStep ? styles.active : ""}`}
              onClick={() => setActiveStep(tabName)}
            >
              {tabName} ({candidatesDataStepMap[tabName]?.length})
            </div>
          )
        })}
      </div>
    </div>
  );
};