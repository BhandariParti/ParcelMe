import { configureStore } from '@reduxjs/toolkit';
import countReducer from './reducerSlice/countSlice';
import userReducer from './reducerSlice/userSlice';
import logger from 'redux-logger';
export default configureStore({
  reducer: {
    count: countReducer,
    user: userReducer,
  },
  middleware: ()=>[logger]
});