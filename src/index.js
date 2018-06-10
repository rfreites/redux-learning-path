import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Provider from './reduxers/Provider';
import store from './reduxers/Store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store} >
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();