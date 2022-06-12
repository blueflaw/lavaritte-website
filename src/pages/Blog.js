import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ScrollUp from '../components/ScrollUp/Index';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import BlogsSection from '../components/Blogs';
import { Helmet } from 'react-helmet';

const BlogPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }

    return (
        <React.Fragment>
            <Helmet>
                <meta name='description' content="Allard Lavaritte Blog"/>
                <meta name='keywords' content='Allard, Lavaritte, Blogs, art, how to, tutorial'/>
            </Helmet>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <BlogsSection/>
            <Footer/>
            <ScrollUp/>        
        </React.Fragment>
    );
};

export default BlogPage;