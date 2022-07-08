import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import ScrollUp from '../../components/ScrollUp/Index';
import { CloudTutorial } from '../../components/TutorialSection/TutorialPages/CloudTutorial'
import { Helmet } from 'react-helmet';

export const CloudTutorialPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
  return (
      <React.Fragment>
        <Helmet>
          <meta name='description' content="Allard Lavaritte's Cloud Tutorial || Anime cloud painting tutorial using Photoshop"/>
          <meta name='keywords' content='Allard, Lavaritte, How to draw clouds'/> 
        </Helmet>
        <ScrollToTop/>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <CloudTutorial/>
        <ScrollUp/> 
        <Footer/>  
      </React.Fragment>   
  )
}
