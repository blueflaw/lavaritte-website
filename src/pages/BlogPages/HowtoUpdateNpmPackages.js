import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import ScrollUp from '../../components/ScrollUp/Index';
import { HowtoUpdateNpmPackages } from '../../components/Blogs/BlogPages/HowtoUpdateNpmPackages';
import { Helmet } from 'react-helmet';
import { SEO } from '../../components/SEO/SEO';
import { metaDescription, metaData } from '../../components/SEO/SEOMetaData';

export const HowtoUpdateNpmPackagesPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <React.Fragment>
            <Helmet htmlAttributes>
                <link rel="canonical" href="/blogs/HowtoUpdateNpmPackages" />
                <meta name="robots" content="index,follow"></meta>
            </Helmet>
            <SEO title={'Lavaritte Blogs - How to Update Npm Packages'} 
                description={metaDescription} 
                ogUrl={'https://lavaritte.com/blogs/HowtoUpdateNpmPackages'} 
                image={'https://lavaritte.com/images/INTO_THE_BIT.8b62c9e7.jpg'}
                meta={metaData}/>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HowtoUpdateNpmPackages/>
            <ScrollUp/> 
            <Footer/>     
            
        </React.Fragment>
    )
}
