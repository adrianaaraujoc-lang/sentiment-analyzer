import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// Cria e monta a aplicação React no elemento DOM com id 'root'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);