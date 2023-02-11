import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import ScrollUp from '../../components/ScrollUp/Index';
import { G8bzAz } from '../../components/ArtSecton/ArtPages/G8bzAz';
import ArtSection from '../../components/ArtSecton';

export const G8bzAzPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <G8bzAz/>
            <ArtSection/>
            <ScrollUp/> 
            <Footer/>     
            
        </>
    )
}
