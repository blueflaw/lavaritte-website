import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import ScrollUp from '../../components/ScrollUp/Index';
import { Helmet } from 'react-helmet';
import { SEO } from '../../components/SEO/SEO';
import { metaDescription, metaData } from '../../components/SEO/SEOMetaData';
import { CreateAWebsite } from '../../components/TutorialSection/TutorialPages/CreateAWebsite';

export const CreatingAWebsiteTutorial = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
  return (
      <React.Fragment>
        <Helmet htmlAttributes>
            <link rel="canonical" href="/tutorials/webdevelopment" />
        </Helmet>
        <SEO title={'Lavaritte tutorials - Creating a Website'} 
            description={metaDescription} 
            ogUrl={'https://lavaritte.com/blogs'} 
            image={'https://lavaritte.com/images/CreateAWebsiteLarge.jpg'}
            meta={metaData}/>
        <ScrollToTop/>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <CreateAWebsite/>
        <ScrollUp/> 
        <Footer/>  
      </React.Fragment>   
  )
}
