import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ScrollUp from '../components/ScrollUp/Index';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { Helmet } from 'react-helmet-async';
import { Newsletter } from '../components/Newsletter/Newsletter';
import Quotes from '../components/Quotes/Quotes';

export const NewsLetterPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }

    return (
        <React.Fragment>
            <Helmet htmlAttributes>
                <link rel="canonical" href="/store" />
                {/* Essential META Tags  */}
                <title>Allard Lavaritte Store</title>
                <meta property="og:title" content="Allard Lavaritte Store"/>
                <meta name="description" content="Stay informed and up-to-date with our newsletter."/>
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://cdna.artstation.com/p/assets/images/images/056/332/104/large/allard-lavaritte-eye-of-flykra.jpg?1669006416"/>
                <meta name='keywords' content='Allard, Lavaritte, NFT, Store, Clothing, walls, posters, official, Pullover, Hoodie, T-shirt, Graphic, V-neck, accessories, art, print,
                                                mouse pad, brush, newsletter'/>
                <meta property="og:url" content="https://lavaritte.com/newsletter"/>
                <meta name="twitter:card" content="summary_large_image"/>

                {/* Non-Essential, But Recommended */}
                <meta property="og:description" content="Allard Lavaritte newsletter"/>
                <meta property="og:site_name" content="Allard Lavaritte newsletter"/>
                <meta name="twitter:image:alt" content="The Archer by Allard Lavaritte"/>

                {/* Non-Essential, But Required for Analytics */}
                <meta property="fb:app_id" content="541481094638652" />
                <meta name="twitter:site" content="@NotAllard"/>
            </Helmet>
            <ScrollToTop/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <Quotes/>
            <Newsletter/>
            <Footer/>
            <ScrollUp/>        
        </React.Fragment>
    );
};

export default NewsLetterPage;