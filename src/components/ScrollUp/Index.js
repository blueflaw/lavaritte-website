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

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);

        return () => {
            setScrollNav(null)
        }
    }, []);

    return (
        <ScrollBackToTop onClick={toggleHome} scrollNav={scrollNav}><FaChevronUp/></ScrollBackToTop>
    )
}

export default ScrollUp
