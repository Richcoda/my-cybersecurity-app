// src/index.tsx
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Import the CSS file

import App from './App';  // Import the App component correctly
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
