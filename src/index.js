import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'mobx-react';
import { HashRouter } from 'react-router-dom';

import App from './components/App';
import  '../node_modules/bulma/css/bulma.min.css'
import './css/common.css';
import '../node_modules/bulma-slider/dist/css/bulma-slider.min.css';

import commonStore from './store/commonStore';
import playerStore from './store/playerStore';
import courseStore from './store/courseStore';

const stores = {
    commonStore,
    playerStore,
    courseStore
}

window._____APP_STATE_____ = stores;

//useStrict(true);

ReactDOM.render((
    <Provider {...stores}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  ), document.getElementById('root'));