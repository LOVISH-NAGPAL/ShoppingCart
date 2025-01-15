import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterslice';
import userReducer from './slices/userslice';

const store = configureStore({
  reducer: {
    counter: counterReducer, // Key: 'counter', Value: reducer function
    user: userReducer,       // Key: 'user', Value: reducer function
  },
});

export default store;
