import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ArtSection from '../components/ArtSecton';
import Footer from '../components/Footer';
import ScrollUp from '../components/ScrollUp/Index';
import { Helmet } from 'react-helmet';
import { SEO } from '../components/SEO/SEO';
import { metaDescription, metaData } from '../components/SEO/SEOMetaData';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }

    return (
        <React.Fragment>
            <Helmet htmlAttributes>
                <link rel="canonical" href="/" />
            </Helmet>
            <SEO title={'Allard Lavaritte'} 
                description={metaDescription} 
                ogUrl={'https://lavaritte.com'} 
                image={'https://lavaritte.com/images/Eye-of-Winter-mini.jpg'}
                meta={metaData}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <ArtSection/>
            <Footer/>
            <ScrollUp/>        
        </React.Fragment>
    );
};

export default Home;