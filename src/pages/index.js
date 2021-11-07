import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/InfoSection';
import { homeObOne} from '../components/InfoSection/Data';
import ArtSection from '../components/ArtSecton';
import { Art1 } from '../components/ArtSecton/Data';

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
            <InfoSection {...homeObOne}/>
            <ArtSection {...Art1}/>
        </>
    );
};

export default Home;