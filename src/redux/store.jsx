import { configureStore } from '@reduxjs/toolkit';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from '../redux/Reducer/RootReducer';

const middlewares = [reduxThunk]; 
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: RootReducer,
  middleware: [...middlewares],
});

export default store;
