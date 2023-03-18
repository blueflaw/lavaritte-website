import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ScrollUp from '../components/ScrollUp/Index';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import BlogsSection from '../components/Blogs';
import { Helmet } from 'react-helmet';
import { SEO } from '../components/SEO/SEO';
import { metaDescription, metaData } from '../components/SEO/SEOMetaData';

const BlogPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }

    return (
        <React.Fragment>
            <Helmet htmlAttributes>
                <link rel="canonical" href="/blog" />
            </Helmet>
            <SEO title={'Lavaritte Blogs'} 
                description={metaDescription} 
                ogUrl={'https://lavaritte.com/blogs'} 
                image={'https://cdnb.artstation.com/p/assets/images/images/042/229/393/large/allard-lavaritte-bb-small.jpg?1633950884'}
                meta={metaData}/>
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