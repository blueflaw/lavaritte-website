import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ScrollUp from '../components/ScrollUp/Index';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import BlogsSection from '../components/Blogs';
import { Helmet } from 'react-helmet-async';

const BlogPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }

    return (
        <React.Fragment>
            <Helmet htmlAttributes>
                <link rel="canonical" href="/blog" />
                <meta name="description" content="Explore the world of art through our blog page. Get inspired by our latest posts on artists, trends, and creative ideas. Join the conversation today!"/>
            
                <title>Allard Lavaritte Blogs</title>
                {/* Essential META Tags  */}
                <meta property="og:title" content="Allard Lavaritte Blog"/>
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://cdna.artstation.com/p/assets/images/images/039/733/768/large/allard-lavaritte-valorant-female-breach.jpg?1626784012" />
                <meta name='keywords' content='Allard, Lavaritte, Blogs, art, how to, tutorial'/>
                <meta property="og:url" content="https://lavaritte.com/blog"/>
                <meta name="twitter:card" content="summary_large_image"/>

                {/* Non-Essential, But Recommended */}
                <meta property="og:description" content="Allard Lavaritte Website"/>
                <meta property="og:site_name" content="Allard Lavaritte"/>
                <meta name="twitter:image:alt" content="The Archer by Allard Lavaritte"/>

                {/* Non-Essential, But Required for Analytics */}
                <meta property="fb:app_id" content="541481094638652" />
                <meta name="twitter:site" content="@NotAllard"/>
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