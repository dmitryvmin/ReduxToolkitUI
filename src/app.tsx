import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import {globalStore} from "./store";
import {PipelineWidget} from "./components/PipelineWidget";
import * as styles from "./styles.module.less";

export function init(el) {
  ReactDOM.render((
    <Provider store={globalStore}>
      <header className={styles.header}>My Pipeline</header>
      <PipelineWidget/>
    </Provider>
  ), el);
}
