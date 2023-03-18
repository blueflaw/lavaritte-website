import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import ScrollUp from '../../components/ScrollUp/Index';
import { PaintingFemaleBreach } from '../../components/Blogs/BlogPages/PaintingFemaleBreach';
import { Helmet } from 'react-helmet';
import { SEO } from '../../components/SEO/SEO';
import { metaDescription, metaData } from '../../components/SEO/SEOMetaData';

export const PaintingFemaleBreachPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <React.Fragment>
            <Helmet htmlAttributes>
                <link rel="canonical" href="/blogs/PaintingFemaleBreach" />
            </Helmet>
            <SEO title={'Lavaritte Blogs - PaintingFemaleBreach'} 
                description={metaDescription} 
                ogUrl={'https://lavaritte.com/blogs/PaintingFemaleBreach'} 
                image={'https://cdna.artstation.com/p/assets/images/images/039/733/768/large/allard-lavaritte-valorant-female-breach.jpg?1626784012'}
                meta={metaData}/>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <PaintingFemaleBreach/>
            <ScrollUp/> 
            <Footer/>     
            
        </React.Fragment>
    )
}
