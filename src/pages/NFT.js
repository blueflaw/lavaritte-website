import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import NFTsection from '../components/NFT';
import ScrollUp from '../components/ScrollUp/Index';
import ScrollToTop from '../components/ScrollToTop';
import { Helmet } from 'react-helmet';

export const NFTPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
    <>
        <Helmet>
            <meta name='description' content="Allard Lavaritte's NFT, A non-fungible token is a type of financial security made out of digital data kept on a blockchain, which is a type of distributed ledger. The blockchain records the ownership of an NFT, which can be transferred by the owner, allowing NFTs to be sold and exchanged."/>
            <meta name='keywords' content='Allard, Lavaritte, NFT, non-fungible token, blockchain, financial, art, sold and exchanged'/>
        </Helmet>
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
