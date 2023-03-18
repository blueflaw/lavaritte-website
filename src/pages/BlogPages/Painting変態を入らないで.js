import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import ScrollUp from '../../components/ScrollUp/Index';
import { PaintingBB } from '../../components/Blogs/BlogPages/PaintingBB';
import { Helmet } from 'react-helmet';
import { SEO } from '../../components/SEO/SEO';
import { metaDescription, metaData } from '../../components/SEO/SEOMetaData';

export const Painting変態を入らないでPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <React.Fragment>
            <Helmet htmlAttributes>
                <link rel="canonical" href="/blogs/Painting変態を入らないで" />
            </Helmet>
            <SEO title={'Lavaritte Blogs - Painting変態を入らないで'} 
                description={metaDescription} 
                ogUrl={'https://lavaritte.com/blogs/Painting変態を入らないで'} 
                image={'https://cdnb.artstation.com/p/assets/images/images/042/229/393/large/allard-lavaritte-bb-small.jpg?1633950884'}
                meta={metaData}/>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <PaintingBB/>
            <ScrollUp/> 
            <Footer/>     
            
        </React.Fragment>
    )
}
