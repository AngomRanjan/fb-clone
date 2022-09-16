import { combineReducers } from 'redux';
import  thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './authReducer';

const rootReducer = combineReducers({ user: userReducer });

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
