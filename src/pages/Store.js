import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ScrollUp from '../components/ScrollUp/Index';
import Store from '../components/Store/Store';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { Helmet } from 'react-helmet-async';

export const StorePage = () => {
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
                <meta name="description" content="Welcome to our art store! Shop a wide variety of original artworks from talented artists around the world. Enhance your space with our unique pieces."/>
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://cdnb.artstation.com/p/assets/images/images/019/381/053/large/allard-lavaritte-the-archer-square.jpg"/>
                <meta name='keywords' content='Allard, Lavaritte, NFT, Store, Clothing, walls, posters, official, Pullover, Hoodie, T-shirt, Graphic, V-neck, accessories, art, print,
                                                mouse pad, brush'/>
                <meta property="og:url" content="https://lavaritte.com/store"/>
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
            <Store/>
            <Footer/>
            <ScrollUp/>        
        </React.Fragment>
    );
};

export default StorePage;