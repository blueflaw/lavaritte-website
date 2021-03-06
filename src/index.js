import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

window.isNavStoreActive = false;
window.isNavNFTActive = false;
window.isNavAboutActive = false;
window.isNavTutorialsActive = false;
window.isNavBlogctive = false;
window.isNavHomeActive = false;

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

