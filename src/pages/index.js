import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ArtSection from '../components/ArtSecton';
import Footer from '../components/Footer';
import ScrollUp from '../components/ScrollUp/Index';

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
            <Footer/>
            <ScrollUp/>        
        </React.Fragment>
    );
};

export default Home;