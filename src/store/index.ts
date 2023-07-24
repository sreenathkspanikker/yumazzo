import { combineReducers } from '@reduxjs/toolkit';
import addReducer from './addSlice'; 
import appReducer from './appSlice'; 

const rootReducer = combineReducers({
  add: addReducer,
  app: appReducer,
});

export default rootReducer;

