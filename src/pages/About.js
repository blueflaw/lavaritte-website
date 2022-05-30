import React, {useState} from 'react';
import TheWebsite from '../components/AboutSection/Index';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const AboutTheWebsite = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <TheWebsite/>
            <ScrollToTop/>
            <Footer/>     
            
        </>
    )
}

export default AboutTheWebsite
