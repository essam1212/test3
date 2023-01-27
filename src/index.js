import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import { DarkModeContextProvider } from './context/darkModeContext';
import { HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>

    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </Router>
);


