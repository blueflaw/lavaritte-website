import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import ScrollUp from '../../components/ScrollUp/Index';
import { MoonSurface } from '../../components/TutorialSection/TutorialPages/MoonSurface'
import { Helmet } from 'react-helmet';
import { SEO } from '../../components/SEO/SEO';
import { metaDescription, metaData } from '../../components/SEO/SEOMetaData';

export const MoonSurfacePage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
  return (
      <React.Fragment>
        <Helmet htmlAttributes>
            <link rel="canonical" href="/tutorials/moonsurfacetutorial" />
        </Helmet>
        <SEO title={'Lavaritte tutorials - moon surface tutorial'} 
            description={metaDescription} 
            ogUrl={'https://lavaritte.com/blogs'} 
            image={'https://cdnb.artstation.com/p/assets/images/images/056/930/243/large/allard-lavaritte-darkness-demon-final.jpg?1670427024'}
            meta={metaData}/>
        <ScrollToTop/>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <MoonSurface/>
        <ScrollUp/> 
        <Footer/>  
      </React.Fragment>   
  )
}
