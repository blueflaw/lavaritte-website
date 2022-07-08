import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import ScrollUp from '../../components/ScrollUp/Index';
import { Qq48Kg } from '../../components/ArtSecton/ArtPages/Qq48Kg';
import ArtSection from '../../components/ArtSecton';

export const Qq48KgPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <Qq48Kg/>
            <ArtSection/>
            <ScrollUp/> 
            <Footer/>     
            
        </>
    )
}
