import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { FAQs } from '../components/FAQs/FAQs';
import ScrollUp from '../components/ScrollUp/Index';
import { Helmet } from 'react-helmet';

const FAQ = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <>
            <Helmet>
                <meta name='description' content="Allard Lavaritte FAQ"/>
                <meta name='keywords' content='Allard, Lavaritte, FAQs, frequently, asked, questions'/>
            </Helmet>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <FAQs/>
            <ScrollUp/> 
            <Footer/>     
            
        </>
    )
}

export default FAQ
