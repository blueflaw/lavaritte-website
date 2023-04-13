import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import ScrollUp from '../../components/ScrollUp/Index';
import { Helmet } from 'react-helmet';
import { SEO } from '../../components/SEO/SEO';
import { metaDescription, metaData } from '../../components/SEO/SEOMetaData';
import ClothingCategory from '../../components/Store/Category/Clothing/ClothingCategory';

export const ClothingPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <React.Fragment>
            <Helmet htmlAttributes>
                <link rel="canonical" href="/store/clothing" />
            </Helmet>
            <SEO title={'Lavaritte Store - Clothing'} 
                description={metaDescription} 
                ogUrl={'https://lavaritte.com/store/clothing'} 
                image={'https://upenandy.sirv.com/lavaritte.com/store/slider/store2.jpg'}
                meta={metaData}/>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <ClothingCategory/>
            <ScrollUp/> 
            <Footer/>     
            
        </React.Fragment>
    )
}
