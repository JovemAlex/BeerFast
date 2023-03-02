import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import AppProvider from './contexts/AppProvider';

ReactDOM.render(
  // <AppProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </AppProvider>,
  document.getElementById('root'),
);
