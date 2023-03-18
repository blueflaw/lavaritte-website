import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import ScrollUp from '../../components/ScrollUp/Index';
import { PaintingMemories } from '../../components/Blogs/BlogPages/PaintingMemories';
import { Helmet } from 'react-helmet';
import { SEO } from '../../components/SEO/SEO';
import { metaDescription, metaData } from '../../components/SEO/SEOMetaData';

export const PaintingMemoriesPage = () => {
  const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <React.Fragment>
            <Helmet htmlAttributes>
                <link rel="canonical" href="/blogs/memoriesofagoldenhour" />
            </Helmet>
            <SEO title={'Lavaritte Blogs - memoriesofagoldenhour'} 
                description={metaDescription} 
                ogUrl={'https://lavaritte.com/blogs/memoriesofagoldenhour'} 
                image={'https://cdna.artstation.com/p/assets/images/images/033/245/632/large/allard-lavaritte-there-is-no-place-like-home-f-small.jpg?1608901718'}
                meta={metaData}/>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <PaintingMemories/>
            <ScrollUp/> 
            <Footer/>     
            
        </React.Fragment>
    )
}
