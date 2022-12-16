import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axios from 'axios';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { API_URL } from './const';
import { store } from './store/store';

axios.defaults.baseURL = API_URL;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
