import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import accountReducer from './Slices/accountSlice';
import bonusReducer from './Slices/bonusSlice';
import rewardReducer from './Reducer/reward';
import { adminApi } from './Api/adminSlice';


const store = configureStore({
  reducer : {
    account : accountReducer,
    bonus : bonusReducer,
    reward : rewardReducer,
    [adminApi.reducerPath] : adminApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
