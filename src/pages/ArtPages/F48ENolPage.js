import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import ScrollUp from '../../components/ScrollUp/Index';
import { F48ENol } from '../../components/ArtSecton/ArtPages/F48ENol';
import ArtSection from '../../components/ArtSecton';

export const F48ENolPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <F48ENol/>
            <ArtSection/>
            <ScrollUp/> 
            <Footer/>     
            
        </>
    )
}
