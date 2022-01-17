import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ArtSection from '../components/ArtSecton';
import TutorialSection from '../components/TutorialSection';
import Footer from '../components/Footer';
import TheWebsite from '../components/AboutSection/TheWebsite/Index';
import ScrollUp from '../components/ScrollUp/Index';
import BlogsSection from '../components/Blogs';
import Store from '../components/Store/Store';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }

    return (
        <React.Fragment>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <ArtSection/>
            {/* <Store/>
            <TutorialSection/>
            <BlogsSection/>
            <TheWebsite/> */}
            <Footer/>
            <ScrollUp/>        
        </React.Fragment>
    );
};

export default Home;