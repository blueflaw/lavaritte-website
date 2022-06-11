import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import ScrollUp from '../../components/ScrollUp/Index';
import { CryptoExchangesPlatforms } from '../../components/Blogs/BlogPages/CryptoExchangesPlatforms';

export const BestCryptoPlatforms = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <CryptoExchangesPlatforms/>
            <ScrollUp/> 
            <Footer/>     
            
        </>
    )
}
