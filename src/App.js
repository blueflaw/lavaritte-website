import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages'
import AboutTheWebsite from './pages/AboutTheWebsite';
import NFT from './pages/NFT';
import Store from './pages/Store';
import TutorialsPage from './pages/Tutorial';
import BlogPage from './pages/Blog';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/NFT" component={NFT} exact/>
        <Route path="/store" component={Store} exact/>
        <Route path="/tutorial" component={TutorialsPage} exact/>
        <Route path="/blog" component={BlogPage} exact/>
        <Route path="/aboutthewebsite" component={AboutTheWebsite} exact/>
      </Switch>
    </Router>
  );
}

export default App;
