import React, {FC} from "react";

import {useCandidatesStore} from "../../store/candidates/useCandidatesStore";

import * as styles from "./styles.module.less";
import {useUIStore} from "../../store/UI/useUIStore";
import {PipelineTabsEnum} from "../../store/UI/constants";

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
          console.log("@@ tabName", tabName, candidatesDataStepMap, PipelineTabsEnum);
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