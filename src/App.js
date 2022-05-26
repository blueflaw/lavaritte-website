import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages'
import About from './pages/About';
import NFT from './pages/NFT';
import Store from './pages/Store';
import TutorialsPage from './pages/Tutorial';
import BlogPage from './pages/Blog';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/NFT" component={NFT} exact/>
        <Route path="/store" component={Store} exact/>
        <Route path="/tutorial" component={TutorialsPage} exact/>
        <Route path="/blog" component={BlogPage} exact/>
        <Route path="/about" component={About} exact/>
        <Route path="/faq" component={FAQ} exact/>
      </Switch>
    </Router>
  );
}

export default App;
