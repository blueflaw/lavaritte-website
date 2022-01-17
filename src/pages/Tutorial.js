import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import TutorialSection from '../components/TutorialSection';
import ScrollUp from '../components/ScrollUp/Index';
import ScrollToTop from '../components/ScrollToTop';

export const TutorialsPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <>
        <ScrollToTop/>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <TutorialSection/>
        <Footer/>
        <ScrollUp/>        
    </>
    )
}

export default TutorialsPage
