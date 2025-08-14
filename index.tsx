/**
 * @file index.tsx
 * @description Punto de entrada principal para la aplicación de React.
 * Este archivo renderiza el componente raíz `App` en el elemento DOM con el id 'root'.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Busca el elemento raíz en el DOM.
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Crea el root de React y renderiza la aplicación.
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
