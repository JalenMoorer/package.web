import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

//import Reducers from './Reducers';
//import { watcherSaga } from './Sagas/sagas';

//const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// let store = createStore(
//   Reducers,
//   compose(applyMiddleware(sagaMidleware), reduxDevTools)
// );

//sagaMiddleware.run(watcherSaga);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
