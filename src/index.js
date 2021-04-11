import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HashRouter from 'react-router-dom/BrowserRouter'


ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </HashRouter>,
  document.getElementById('root')
);

