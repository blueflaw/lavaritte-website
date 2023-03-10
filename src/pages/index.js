import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ArtSection from '../components/ArtSecton';
import Footer from '../components/Footer';
import ScrollUp from '../components/ScrollUp/Index';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }

    return (
        <React.Fragment>
            <Helmet htmlAttributes>
            <title>allard lavaritte</title>

            <link rel="canonical" href="/" />

            {/* Essential META Tags  */}
            <meta name="description" content="Discover a world of creativity. Browse unique and inspiring artworks of Allard Lavaritte"/>
            <meta property="og:title" content="Allard Lavaritte"/>
            <meta property="og:type" content="website" />

            <meta property="og:image" content="https://lavaritte.com/images/Eye-of-Winter-mini.jpg"/>
            <meta property="og:image:secure_url" content="https://lavaritte.com/images/Eye-of-Winter-mini.jpg" /> 
            <meta property="og:image:type" content="image/jpg" /> 
            <meta property="og:image:width" content="1280" /> 
            <meta property="og:image:height" content="720" />

            <meta name='keywords' content='Allard, Lavaritte, Art, non-fungible token, blockchain, financial, art, sold and exchanged'/>
            <meta property="og:url" content="https://lavaritte.com"/>
            <meta name="twitter:card" content="summary_large_image"/>

            {/* Non-Essential, But Recommended */}
            <meta property="og:description" content="Welcome to my website where I share my art! As a multi-talented artist, I showcase a variety of mediums and styles, from whimsical illustrations to thought-provoking designs. With a passion for creativity and a dedication to quality, my art is a reflection of my unique perspective and personal style. Whether you're a fellow artist looking for inspiration or someone who simply appreciates beautiful and original artwork, my website is the perfect destination for art lovers everywhere."/>
            <meta property="og:site_name" content="Allard Lavaritte"/>
            <meta name="twitter:image:alt" content="The Archer by Allard Lavaritte"/>

            {/* Non-Essential, But Required for Analytics */}
            <meta property="fb:app_id" content="541481094638652" />
            <meta name="twitter:site" content="@NotAllard"/>
            </Helmet>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <ArtSection/>
            <Footer/>
            <ScrollUp/>        
        </React.Fragment>
    );
};

export default Home;