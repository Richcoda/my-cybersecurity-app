// src/index.tsx
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Import the CSS file
import { SpeedInsights } from "@vercel/speed-insights/react"

import App from './App';  // Import the App component correctly

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
