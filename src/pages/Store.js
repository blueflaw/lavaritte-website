import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ScrollUp from '../components/ScrollUp/Index';
import Store from '../components/Store/Store';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { Helmet } from 'react-helmet';
import { SEO } from '../components/SEO/SEO';
import { metaDescription, metaData } from '../components/SEO/SEOMetaData';

export const StorePage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }

    return (
        <React.Fragment>
            <Helmet htmlAttributes>
                <link rel="canonical" href="/store" />
            </Helmet>
            <SEO title={'Lavaritte Store'} 
                description={metaDescription} 
                ogUrl={'https://lavaritte.com/newsletter'} 
                image={'https://upenandy.sirv.com/lavaritte.com/store/slider/store2.jpg'}
                meta={metaData}/>
            <ScrollToTop />
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <Store/>
            <Footer/>
            <ScrollUp/>        
        </React.Fragment>
    );
};

export default StorePage;