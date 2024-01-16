import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import AuthProvider from 'components/contexts/AuthProvider';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider></Provider>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
