import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import NFTsection from '../components/NFT';
import ScrollUp from '../components/ScrollUp/Index';
import ScrollToTop from '../components/ScrollToTop';

export const NFTPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <>
        <ScrollToTop />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <NFTsection/>
        <Footer/>
        <ScrollUp/>        
    </>
    )
}

export default NFTPage
