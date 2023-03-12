import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import HomeWebsite from './HomeWebsite';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <HomeWebsite />
    </Router>
  </React.StrictMode>
);
