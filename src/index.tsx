import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index';

import './styles/default';
import './styles/font';
import './styles/reset';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>
    <Index />
  </>,
  document.getElementById('root')
);

serviceWorker.unregister();
