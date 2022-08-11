import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'allotment/dist/style.css';
import './styles/default.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
