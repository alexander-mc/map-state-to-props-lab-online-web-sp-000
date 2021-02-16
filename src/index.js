import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import manageUsers from './reducers/manageUsers'
import App from './App'

// add imports and code
const store = createStore(
  manageUsers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

ReactDOM.render(
  // add imports and code
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
