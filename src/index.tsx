import React from 'react';
import ReactDOM from 'react-dom/client';
import BRINTE from './BRINTE';import './styles/index.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BRINTE />
  </React.StrictMode>
);
