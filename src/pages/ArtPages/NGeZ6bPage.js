import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import ScrollUp from '../../components/ScrollUp/Index';
import { NGeZ6b } from '../../components/ArtSecton/ArtPages/NGeZ6b';
import ArtSection from '../../components/ArtSecton';

export const NGeZ6bPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <NGeZ6b/>
            <ArtSection/>
            <ScrollUp/> 
            <Footer/>     
            
        </>
    )
}
