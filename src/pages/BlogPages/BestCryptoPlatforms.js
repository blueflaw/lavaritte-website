import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import ScrollUp from '../../components/ScrollUp/Index';
import { CryptoExchangesPlatforms } from '../../components/Blogs/BlogPages/CryptoExchangesPlatforms';
import { Helmet } from 'react-helmet';

export const BestCryptoPlatforms = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <>
            <Helmet>
                <meta name='description' content="5 Best Crypto Platforms"/>
                <title>5 Best Crypto Platforms</title>
                <meta name="description"   content="Investing in cryptocurrencies, Decentralized Finance (DeFi), and other Initial Coin Offerings (ICOs) is highly speculative and dangerous, and markets may be quite volatile. Before making any financial decisions, get the advice of a trained specialist. Investopedia or the author make no suggestion to invest in cryptocurrencies, nor can the accuracy or timeliness of the material be guaranteed." />
                <meta name="image"         content="https://lavaritte.com/static/media/INTO_THE_BIT.8b62c9e7.jpg" />
                <meta name='keywords'             content='Allard, Lavaritte, 5, Best, Crypto, Platforms, Eth, btc, bitcoin, binance, coinbase, uphold, gemini, kucoin, etoro'/>
            </Helmet>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <CryptoExchangesPlatforms/>
            <ScrollUp/> 
            <Footer/>     
            
        </>
    )
}
