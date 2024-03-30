import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { PrivacyPolicy } from '../components/PrivacyPolicy/PrivacyPolicy';
import ScrollUp from '../components/ScrollUp/Index';
import { Helmet } from 'react-helmet';
import { SEO } from '../components/SEO/SEO';
import { metaDescription, metaData } from '../components/SEO/SEOMetaData';

const PrivacyPolicyPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <>
            <Helmet htmlAttributes>
                <link rel="canonical" href="/PrivacyPolicy" />
            </Helmet>
            <SEO title={'Allard Lavaritte PrivacyPolicy'} 
                description={metaDescription} 
                ogUrl={'https://lavaritte.com/PrivacyPolicy'} 
                meta={metaData}/>
            <ScrollToTop/>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <PrivacyPolicy/>
            <ScrollUp/> 
            <Footer/>     
            
        </>
    )
}

export default PrivacyPolicyPage
