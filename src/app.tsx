import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import {globalStore} from "./stores";
import {PipelineWidget} from "./components/PipelineWidget";
import * as styles from "./styles.module.less";

export function init(el) {
  ReactDOM.render((
    <Provider store={globalStore}>
      <header className={styles.header}>Tabbable List Component</header>
      <PipelineWidget/>
    </Provider>
  ), el);
}
