import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ScrollUp from '../components/ScrollUp/Index';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { Helmet } from 'react-helmet';
import { Newsletter } from '../components/Newsletter/Newsletter';
import Quotes from '../components/Quotes/Quotes';
import { SEO } from '../components/SEO/SEO';
import { metaDescription, metaData } from '../components/SEO/SEOMetaData';

export const NewsLetterPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }

    return (
        <React.Fragment>
            <Helmet htmlAttributes>
                <link rel="canonical" href="/newsletter" />
            </Helmet>
            <SEO title={'Lavaritte Newsletter'} 
                description={metaDescription} 
                ogUrl={'https://lavaritte.com/newsletter'} 
                image={'https://lavaritte.com/images/Eye-of-Winter-mini.jpg'}
                meta={metaData}/>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <Quotes/>
            <Newsletter/>
            <Footer/>
            <ScrollUp/>        
        </React.Fragment>
    );
};

export default NewsLetterPage;