import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ScrollUp from '../components/ScrollUp/Index';
import Store from '../components/Store/Store';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { SliderData } from '../components/Store/SliderData';

export const StorePage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }

    return (
        <React.Fragment>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <Store slides={SliderData}/>
            <Footer/>
            <ScrollUp/>        
        </React.Fragment>
    );
};

export default StorePage;