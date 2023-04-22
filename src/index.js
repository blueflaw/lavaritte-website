import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

window.isNavStoreActive = false;
window.isNavNFTActive = false;
window.isNavAboutActive = false;
window.isNavTutorialsActive = false;
window.isNavBlogctive = false;
window.isNavHomeActive = false;
window.isNavShowcaseActive = false;

ReactDOM.render(
  <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

