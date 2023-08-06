// UYGULAMA İÇİ İMPORT
import React from 'react';
import './index.css';
import App from './App';
import store from './redux/store';
// UYGULAMA DIŞI İMPORT
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </BrowserRouter>
);

