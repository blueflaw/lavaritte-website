import React, {useState, useEffect} from 'react';
import { FaChevronUp} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { ScrollBackToTop } from './ScrollUpElements';

const ScrollUp = () => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav= () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <ScrollBackToTop to='/' onClick={toggleHome} scrollNav={scrollNav}><FaChevronUp/></ScrollBackToTop>
    )
}

export default ScrollUp
