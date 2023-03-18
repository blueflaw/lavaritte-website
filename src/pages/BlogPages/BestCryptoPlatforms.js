import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import ScrollUp from '../../components/ScrollUp/Index';
import { CryptoExchangesPlatforms } from '../../components/Blogs/BlogPages/CryptoExchangesPlatforms';
import { Helmet } from 'react-helmet';
import { SEO } from '../../components/SEO/SEO';
import { metaDescription, metaData } from '../../components/SEO/SEOMetaData';

export const BestCryptoPlatforms = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <React.Fragment>
            <Helmet htmlAttributes>
                <link rel="canonical" href="/blogs/bestcryptoplatforms" />
            </Helmet>
            <SEO title={'Lavaritte Blogs - bestcryptoplatforms'} 
                description={metaDescription} 
                ogUrl={'https://lavaritte.com/blogs/bestcryptoplatforms'} 
                image={'https://lavaritte.com/images/INTO_THE_BIT.8b62c9e7.jpg'}
                meta={metaData}/>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <CryptoExchangesPlatforms/>
            <ScrollUp/> 
            <Footer/>     
            
        </React.Fragment>
    )
}
