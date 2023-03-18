import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { FAQs } from '../components/FAQs/FAQs';
import ScrollUp from '../components/ScrollUp/Index';
import { Helmet } from 'react-helmet';
import { SEO } from '../components/SEO/SEO';
import { metaDescription, metaData } from '../components/SEO/SEOMetaData';

const FAQ = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <>
            <Helmet htmlAttributes>
                <link rel="canonical" href="/faq" />
            </Helmet>
            <SEO title={'Allard Lavaritte FAQ'} 
                description={metaDescription} 
                ogUrl={'https://lavaritte.com/faq'} 
                image={'https://cdnb.artstation.com/p/assets/images/images/051/387/003/large/allard-lavaritte-cloud-collection-01.jpg?1657160064'}
                meta={metaData}/>
            <ScrollToTop/>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <FAQs/>
            <ScrollUp/> 
            <Footer/>     
            
        </>
    )
}

export default FAQ
