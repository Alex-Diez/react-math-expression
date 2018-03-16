import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Application } from './Application';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Application />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
