import React from 'react';
import ReactDOM from 'react-dom/client';
import { Nav } from './comp/Nav';
import App from './comp/App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css"
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>
);


reportWebVitals();
