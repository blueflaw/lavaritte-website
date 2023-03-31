import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import { Helmet } from 'react-helmet';

import Home from './pages'
import About from './pages/About';
import NFT from './pages/NFT';
import Store from './pages/Store';
import TutorialsPage from './pages/Tutorial';
import BlogPage from './pages/Blog';
import FAQ from './pages/FAQ';
import PageNotFound from './pages/PageNotFound';
import NewsLetterPage from './pages/NewsletterPage';

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
import { VJYXROPage } from './pages/ArtPages/VJYXROPage';
import { NGeZ6bPage } from './pages/ArtPages/NGeZ6bPage';
import { F48AnqPage } from './pages/ArtPages/F48AnqPage';
import { ZeZGewPage } from './pages/ArtPages/ZeZGewPage';
import { Qq48KgPage } from './pages/ArtPages/Qq48KgPage';
import { KlqrYdPage } from './pages/ArtPages/KlqrYdPage';
import { D0ZmBePage } from './pages/ArtPages/D0ZmBePage';
import { NGdnmbPage } from './pages/ArtPages/NGdnmbPage';
import { G8bzAzPage } from './pages/ArtPages/G8bzAzPage';
import { B5LzavPage } from './pages/ArtPages/B5LzavPage';
import { G9oD8nPage } from './pages/ArtPages/G9oD8nPage';
import { XggARYPage } from './pages/ArtPages/XggARYPage';

import { Painting変態を入らないでPage } from './pages/BlogPages/Painting変態を入らないで';
import { PaintingJettPage } from './pages/BlogPages/PaintingJett';
import { PaintingFemaleBreachPage } from './pages/BlogPages/PaintingFemaleBreach';
import { PaintingMemoriesPage } from './pages/BlogPages/PaintingMemoriesPage';
import { BestCryptoPlatforms } from './pages/BlogPages/BestCryptoPlatforms';

import { CloudTutorialPage } from './pages/TutorialPages/CloudTutorial';
import { MoonSurfacePage } from './pages/TutorialPages/MoonSurfacePage';
import { CreatingAWebsiteTutorial } from './pages/TutorialPages/CreatingAWebsiteTutorial';

import ReactGA from 'react-ga';
import AppConfig from './App.config';
ReactGA.initialize(AppConfig.GOOGLE.GA_TRACKING_CODE);

function App() {
  
  return (
    <Router>
      {/* <Helmet>
        <title>Allard Lavaritte</title>
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow, Allard, Lavaritte, UI, UX, Digital, Artist, awesome, gwapo, webdesign, web, designer" />
        <meta name="keywords" content="index, follow, Allard, Lavaritte, UI, UX, Digital, Artist, awesome, gwapo, webdesign, web, designer, Allard Lavaritte" />
        <meta name='description' content="Allard Lavaritte is a creative director by day, and a freelance illustrator, graphic designer, UI/UX specialist, and cinematographer by night. I've worked with clients of all sizes to design and develop brand identities, print collateral, website interfaces and experiences, and more. I love working with people who want to bring their ideas to life—whether that means having me come up with the perfect logo or helping them come up with ideas for a video. You can contact me at me@lavaritte.com"/>
        <meta property="og:url"           content="https://www.lavaritte.com/" />
        <meta property="og:type"          content="website" />
        <meta property="og:title"         content="Allard Lavaritte" />
        <meta property="og:description"   content="Allard Lavaritte is a web designer / Freelance Artist Based in the Philippines. Allard has established his artistic style and process, merging cutting-edge 3D graphics with traditional art and animation aesthetics that result in a unique visual experience.His innovative approach to artistic medium expressed both in his works and educational materials have led a wave of artistic styles that quickly became mainstream in the entertainment industry." />
        <meta property="og:image"         content="https://cdnb.artstation.com/p/assets/images/images/019/380/861/20190715191058/smaller_square/allard-lavaritte-untitled-1.jpg?1563235858" />
      </Helmet> */}
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/NFT" component={NFT} exact/>
        <Route path="/store" component={Store} exact/>
        <Route path="/tutorial" component={TutorialsPage} exact/>
        <Route path="/blog" component={BlogPage} exact/>
        <Route path="/about" component={About} exact/>
        <Route path="/faq" component={FAQ} exact/>
        <Route path="/newsletter" component={NewsLetterPage} exact/>

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
        <Route path="/artwork/VJYXRO" component={VJYXROPage} exact/>
        <Route path="/artwork/NGeZ6b" component={NGeZ6bPage} exact/>
        <Route path="/artwork/F48Anq" component={F48AnqPage} exact/>
        <Route path="/artwork/ZeZGew" component={ZeZGewPage} exact/>
        <Route path="/artwork/Qq48Kg" component={Qq48KgPage} exact/>
        <Route path="/artwork/KlqrYd" component={KlqrYdPage} exact/>
        <Route path="/artwork/D0ZmBe" component={D0ZmBePage} exact/>
        <Route path="/artwork/NGdnmb" component={NGdnmbPage} exact/>
        <Route path="/artwork/G8bzAz" component={G8bzAzPage} exact/>
        <Route path="/artwork/B5Lzav" component={B5LzavPage} exact/>
        <Route path="/artwork/G9oD8n" component={G9oD8nPage} exact/>
        <Route path="/artwork/XggARY" component={XggARYPage} exact/>

        <Route path="/blogs/Painting変態を入らないで" component={Painting変態を入らないでPage} exact/>
        <Route path="/blogs/PaintingJett" component={PaintingJettPage} exact/>
        <Route path="/blogs/PaintingFemaleBreach" component={PaintingFemaleBreachPage} exact/>
        <Route path="/blogs/memoriesofagoldenhour" component={PaintingMemoriesPage} exact/>
        <Route path="/blogs/bestcryptoplatforms" component={BestCryptoPlatforms} exact/>

        <Route path="/tutorials/cloudtutorials" component={CloudTutorialPage} exact/>
        <Route path="/tutorials/moonsurfacetutorial" component={MoonSurfacePage} exact/>
        <Route path="/tutorials/webdevelopment" component={CreatingAWebsiteTutorial} exact/>

        <Route path="/404" component={ PageNotFound } />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
