import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ArtSection from '../components/ArtSecton';
import TutorialSection from '../components/TutorialSection';
import Footer from '../components/Footer';
import TheWebsite from '../components/AboutSection/TheWebsite/Index';

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <ArtSection/>
            <TutorialSection/>
            <TheWebsite/>
            <Footer/>        
        </>
    );
};

export default Home;