import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter type="function" />
  </React.StrictMode>,
);