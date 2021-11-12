import React, {useState} from 'react';
import TheWebsite from '../components/AboutSection/TheWebsite/Index';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const AboutTheWebsite = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <TheWebsite/>

            <Footer/>     
            
        </div>
    )
}

export default AboutTheWebsite
