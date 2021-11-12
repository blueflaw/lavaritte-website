import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages'
import AboutTheWebsite from './pages/AboutTheWebsite';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/aboutthewebsite" component={AboutTheWebsite} exact/>
      </Switch>
    </Router>
  );
}

export default App;
