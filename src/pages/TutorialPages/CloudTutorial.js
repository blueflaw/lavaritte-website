import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import ScrollUp from '../../components/ScrollUp/Index';
import { CloudTutorial } from '../../components/TutorialSection/TutorialPages/CloudTutorial'

export const CloudTutorialPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
  return (
      <React.Fragment>
        <ScrollToTop/>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <CloudTutorial/>
        <ScrollUp/> 
        <Footer/>  
      </React.Fragment>   
  )
}
