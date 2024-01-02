import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
// import AuthProvider from './components/Contexts/Provider';
import './index.css';
import './components/FirstLesson/ColorPicker/ColorPicker.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
      <App />
    {/* </AuthProvider> */}
  </React.StrictMode>
);
