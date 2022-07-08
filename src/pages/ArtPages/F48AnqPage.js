import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import ScrollUp from '../../components/ScrollUp/Index';
import { F48Anq } from '../../components/ArtSecton/ArtPages/F48Anq';
import ArtSection from '../../components/ArtSecton';

export const F48AnqPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <F48Anq/>
            <ArtSection/>
            <ScrollUp/> 
            <Footer/>     
            
        </>
    )
}
