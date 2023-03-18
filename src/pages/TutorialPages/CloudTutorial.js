import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import ScrollUp from '../../components/ScrollUp/Index';
import { CloudTutorial } from '../../components/TutorialSection/TutorialPages/CloudTutorial'
import { Helmet } from 'react-helmet';
import { SEO } from '../../components/SEO/SEO';
import { metaDescription, metaData } from '../../components/SEO/SEOMetaData';

export const CloudTutorialPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
  return (
      <React.Fragment>
        <Helmet htmlAttributes>
            <link rel="canonical" href="/tutorials/cloudtutorials" />
        </Helmet>
        <SEO title={'Lavaritte tutorials - cloudtutorials'} 
            description={metaDescription} 
            ogUrl={'https://lavaritte.com/blogs'} 
            image={'https://cdnb.artstation.com/p/assets/images/images/051/387/003/large/allard-lavaritte-cloud-collection-01.jpg?1657160064'}
            meta={metaData}/>
        <ScrollToTop/>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <CloudTutorial/>
        <ScrollUp/> 
        <Footer/>  
      </React.Fragment>   
  )
}
