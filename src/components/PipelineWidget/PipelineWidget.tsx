import React, {FC, useEffect} from "react";

import * as styles from "./styles.module.less";
import {PipelineTabs} from "../PipelineTabs";
import {PipelineTable} from "../PipelineTable";
import {useCandidatesStore} from "../../stores/dataStore/useCandidatesStore";

export const PipelineWidget: FC<{}> = () => {

  /**
   * ==== State ====
   */
  const {
    candidatesData,
    fetchCandidatesData,
  } = useCandidatesStore();

  /**
   * ==== Effects
   */
  useEffect(() => {
    if (!candidatesData.length) {
      fetchCandidatesData();
    }
  }, []);

  /**
   * ==== Return JSX
   */
  return (
    <div className={styles.PipelineWidget}>
      <PipelineTabs/>
      <PipelineTable/>
    </div>
  );
};