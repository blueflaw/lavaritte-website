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

import { Painting変態を入らないでPage } from './pages/BlogPages/Painting変態を入らないで';
import { PaintingJettPage } from './pages/BlogPages/PaintingJett';
import { PaintingFemaleBreachPage } from './pages/BlogPages/PaintingFemaleBreach';
import { PaintingMemoriesPage } from './pages/BlogPages/PaintingMemoriesPage';

import { CloudTutorialPage } from './pages/TutorialPages/CloudTutorial';

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

        <Route path="/blogs/Painting変態を入らないで" component={Painting変態を入らないでPage} exact/>
        <Route path="/blogs/PaintingJett" component={PaintingJettPage} exact/>
        <Route path="/blogs/PaintingFemaleBreach" component={PaintingFemaleBreachPage} exact/>
        <Route path="/blogs/memoriesofagoldenhour" component={PaintingMemoriesPage} exact/>

        <Route path="/tutorials/cloudtutorials" component={CloudTutorialPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
