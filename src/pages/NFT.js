import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import NFTsection from '../components/NFT';
import ScrollUp from '../components/ScrollUp/Index';
import ScrollToTop from '../components/ScrollToTop';
import { Helmet } from 'react-helmet';
import { SEO } from '../components/SEO/SEO';
import { metaDescription, metaData } from '../components/SEO/SEOMetaData';

export const NFTPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
    <React.Fragment>
        <Helmet htmlAttributes>
                <link rel="canonical" href="/NFT" />
        </Helmet>
        <SEO title={'Lavaritte NFT'} 
            description={metaDescription} 
            ogUrl={'https://lavaritte.com/newsletter'} 
            image={'https://cdnb.artstation.com/p/assets/images/images/019/380/861/large/allard-lavaritte-untitled-1.jpg?1563235858'}
            meta={metaData}/>
        <ScrollToTop />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <NFTsection/>
        <Footer/>
        <ScrollUp/>        
    </React.Fragment>
    )
}

export default NFTPage
