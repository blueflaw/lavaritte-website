import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import ScrollUp from '../../components/ScrollUp/Index';
import { PaintingJettfromValorant } from '../../components/Blogs/BlogPages/PaintingJett';
import { Helmet } from 'react-helmet';
import { SEO } from '../../components/SEO/SEO';
import { metaDescription, metaData } from '../../components/SEO/SEOMetaData';

export const PaintingJettPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <React.Fragment>
            <Helmet htmlAttributes>
                <link rel="canonical" href="/blogs/PaintingJett" />
            </Helmet>
            <SEO title={'Lavaritte Blogs - PaintingJett'} 
                description={metaDescription} 
                ogUrl={'https://lavaritte.com/blogs/PaintingJett'} 
                image={'https://cdna.artstation.com/p/assets/images/images/040/077/016/large/allard-lavaritte-jetto.jpg?1627807423'}
                meta={metaData}/>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <PaintingJettfromValorant/>
            <ScrollUp/> 
            <Footer/>     
            
        </React.Fragment>
    )
}
