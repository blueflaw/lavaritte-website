import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import TutorialSection from '../components/TutorialSection';
import ScrollUp from '../components/ScrollUp/Index';
import ScrollToTop from '../components/ScrollToTop';
import { Helmet } from 'react-helmet-async';
import { SEO } from '../components/SEO/SEO';
import { metaDescription, metaData } from '../components/SEO/SEOMetaData';

export const TutorialsPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
    <React.Fragment>
        <Helmet htmlAttributes>
                <link rel="canonical" href="/tutorial" />
            </Helmet>
            <SEO title={'Lavaritte Tutorial'} 
                description={metaDescription} 
                ogUrl={'https://lavaritte.com/tutorial'} 
                image={'https://cdnb.artstation.com/p/assets/images/images/056/930/243/large/allard-lavaritte-darkness-demon-final.jpg?1670427024'}
                meta={metaData}/>
        <ScrollToTop />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <TutorialSection/>
        <Footer/>
        <ScrollUp/>        
    </React.Fragment>
    )
}

export default TutorialsPage
