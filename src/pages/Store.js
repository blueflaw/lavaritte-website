import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ScrollUp from '../components/ScrollUp/Index';
import Store from '../components/Store/Store';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { Helmet } from 'react-helmet';

export const StorePage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }

    return (
        <React.Fragment>
            <Helmet>
                <meta name='description' content="Allard Lavaritte's Store"/>
                <meta property="og:image" content="https://cdnb.artstation.com/p/assets/images/images/019/381/053/large/allard-lavaritte-the-archer-square.jpg?1563235726" />
                <meta name='keywords' content='Allard, Lavaritte, NFT, Store, Clothing, walls, posters, official, Pullover, Hoodie, T-shirt, Graphic, V-neck, accessories, art, print,
                                                mouse pad, brush'/>
            </Helmet>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <Store/>
            <Footer/>
            <ScrollUp/>        
        </React.Fragment>
    );
};

export default StorePage;