import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Datalayer} from './Stateprovider.js'
import reducer,{initialState} from './reducer.js';
ReactDOM.render(
  <React.StrictMode>
  <Datalayer initialState={initialState} reducer={reducer}>
  <App />
  </Datalayer>
    
  </React.StrictMode>,
  document.getElementById('root')
);
