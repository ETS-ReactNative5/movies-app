
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducer';

const middleware = [
  thunkMiddleware,
];


const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

export default store;
