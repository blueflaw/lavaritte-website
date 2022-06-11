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

import { Ga4ZRaPage } from './pages/ArtPages/Ga4ZRaPage';
import { WKO6oNPage } from './pages/ArtPages/WKO6oNPage';
import { MDNwl1Page } from './pages/ArtPages/MDNwl1Page';
import { BQ6A0Page } from './pages/ArtPages/BQ6A0Page';
import { F48ENolPage } from './pages/ArtPages/F48ENolPage';
import { AYBzKJPage } from './pages/ArtPages/AYBzKJPage';
import { Nx8ln5Page } from './pages/ArtPages/Nx8ln5Page';
import { MDz9gdPage } from './pages/ArtPages/MDz9gdPage';
import { Q9Q6waPage } from './pages/ArtPages/Q9Q6waPage';
import { ARnJE9Page } from './pages/ArtPages/ARnJE9Page';
import { GawZFaPage } from './pages/ArtPages/GawZFaPage';
import { Z5v2xZPage } from './pages/ArtPages/Z5v2xZPage';
import { R99bDPage } from './pages/ArtPages/R99bDPage';
import { AR5oBXPage } from './pages/ArtPages/AR5oBXPage';
import { QAKJEePage } from './pages/ArtPages/QAKJEePage';

import { Painting変態を入らないでPage } from './pages/BlogPages/Painting変態を入らないで';
import { PaintingJettPage } from './pages/BlogPages/PaintingJett';
import { PaintingFemaleBreachPage } from './pages/BlogPages/PaintingFemaleBreach';
import { PaintingMemoriesPage } from './pages/BlogPages/PaintingMemoriesPage';
import { BestCryptoPlatforms } from './pages/BlogPages/BestCryptoPlatforms';

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

        <Route path="/artwork/Ga4ZRa" component={Ga4ZRaPage} exact/>
        <Route path="/artwork/WKO6oN" component={WKO6oNPage} exact/>
        <Route path="/artwork/MDNwl1" component={MDNwl1Page} exact/>
        <Route path="/artwork/BQ6A0"  component={BQ6A0Page} exact/>
        <Route path="/artwork/F48ENol"component={F48ENolPage} exact/>
        <Route path="/artwork/AYBzKJ" component={AYBzKJPage} exact/>
        <Route path="/artwork/Nx8ln5" component={Nx8ln5Page} exact/>
        <Route path="/artwork/MDz9gd" component={MDz9gdPage} exact/>
        <Route path="/artwork/Q9Q6wa" component={Q9Q6waPage} exact/>
        <Route path="/artwork/ARnJE9" component={ARnJE9Page} exact/>
        <Route path="/artwork/GawZFa" component={GawZFaPage} exact/>
        <Route path="/artwork/Z5v2xZ" component={Z5v2xZPage} exact/>
        <Route path="/artwork/R99bD"  component={R99bDPage} exact/>
        <Route path="/artwork/AR5oBX" component={AR5oBXPage} exact/>
        <Route path="/artwork/QAKJEe" component={QAKJEePage} exact/>

        <Route path="/blogs/Painting変態を入らないで" component={Painting変態を入らないでPage} exact/>
        <Route path="/blogs/PaintingJett" component={PaintingJettPage} exact/>
        <Route path="/blogs/PaintingFemaleBreach" component={PaintingFemaleBreachPage} exact/>
        <Route path="/blogs/memoriesofagoldenhour" component={PaintingMemoriesPage} exact/>
        <Route path="/blogs/bestcryptoplatforms" component={BestCryptoPlatforms} exact/>

        <Route path="/tutorials/cloudtutorials" component={CloudTutorialPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
