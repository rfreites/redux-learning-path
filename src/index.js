import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './reduxers/Store';

const render = () => {
  ReactDOM.render(<App {...store.getState()} />, document.getElementById('root'));
  registerServiceWorker();
};

store.subscribe(() => {
  render();
  console.log(store.getState());
});

render();