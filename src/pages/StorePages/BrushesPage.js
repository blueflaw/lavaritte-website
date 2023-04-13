import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import ScrollUp from '../../components/ScrollUp/Index';
import { Helmet } from 'react-helmet';
import { SEO } from '../../components/SEO/SEO';
import { metaDescription, metaData } from '../../components/SEO/SEOMetaData';
import SoftwareBrushesCategory from '../../components/Store/Category/SoftwareBrushesCategory';

export const BrushesPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <React.Fragment>
            <Helmet htmlAttributes>
                <link rel="canonical" href="/store/software-brushes" />
            </Helmet>
            <SEO title={'Lavaritte Store - Software-Brushes'} 
                description={metaDescription} 
                ogUrl={'https://lavaritte.com/store/software-brushes'} 
                image={'https://upenandy.sirv.com/lavaritte.com/store/slider/store2.jpg'}
                meta={metaData}/>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <SoftwareBrushesCategory/>
            <ScrollUp/> 
            <Footer/>     
            
        </React.Fragment>
    )
}
