import React, { useState } from 'react';
import TheWebsite from '../components/AboutSection/Index';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { SEO } from '../components/SEO/SEO';
import { metaDescription, metaData } from '../components/SEO/SEOMetaData';
import { Helmet } from 'react-helmet';

const AboutTheWebsite = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <React.Fragment>
            <Helmet htmlAttributes>
                <link rel="canonical" href="/about" />
            </Helmet>
            <SEO title={'About Allard Lavaritte'} 
                description={metaDescription} 
                ogUrl={'https://lavaritte.com/about'} 
                image={'https://cdnb.artstation.com/p/assets/images/images/033/208/387/large/allard-lavaritte-first-contact-v2a.jpg?1608750241'}
                meta={metaData}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <TheWebsite/>
            <ScrollToTop/>
            <Footer/>     
            
        </React.Fragment>
    )
}

export default AboutTheWebsite
