import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import AuthProvider from 'components/contexts/AuthProvider';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/react-training">
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
