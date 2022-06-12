import React, {useState} from 'react';
import TheWebsite from '../components/AboutSection/Index';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { Helmet } from 'react-helmet';

const AboutTheWebsite = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <>
            <Helmet>
                <meta name='description' content="Allard Lavaritte Blog"/>
                <meta name='keywords' content='Allard, Lavaritte, about, art, web design, UI/UX'/>
            </Helmet>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <TheWebsite/>
            <ScrollToTop/>
            <Footer/>     
            
        </>
    )
}

export default AboutTheWebsite
