// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';
import cryptoReducer from './cryptoSlice';
import notificationReducer from './notificationSlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    crypto: cryptoReducer,
    notification: notificationReducer,
  },
});

export default store;
