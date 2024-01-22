import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="inovex-elements-theme inovex-elements-typo">
      <App />
    </div>
  </React.StrictMode>,
);
