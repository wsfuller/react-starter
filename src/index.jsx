// const css = require('./index.scss');
//
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import App from './components/App.jsx';


ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);


// import axios from 'axios';
//
// const initialState = {
//   fetching: false,
//   fetched: false,
//   users: [],
//   error: null
// };
//
// const reducer = (state=initialState, action) => {
//   switch (action.type){
//     case "FETCH_USERS_PENDING":{
//       return {
//         ...state,
//         fetching: true
//       }
//       break;
//     }
//     case "FETCH_USERS_REJECTED":{
//       return {...state, fetching: false, error: action.payload}
//       break;
//     }
//     case "RECEIVE_USERS_FULFILLED":{
//       return {...state, fetching: false, users: action.payload}
//       break;
//     }
//   }
//   return state;
// };
//
//
// store.dispatch({
//   type: "FETCH_USERS_START",
//   payload: axios.get("http://rest.learncode.academy/api/wstern/users/")
// });
