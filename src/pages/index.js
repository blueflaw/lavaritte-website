import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ArtSection from '../components/ArtSecton';
import Footer from '../components/Footer';
import ScrollUp from '../components/ScrollUp/Index';
import { Helmet } from 'react-helmet';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }

    return (
        <React.Fragment>
            <Helmet>
                {/* Essential META Tags  */}
                <meta property="og:title" content="Allard Lavaritte"/>
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://cdnb.artstation.com/p/assets/images/images/019/381/053/large/allard-lavaritte-the-archer-square.jpg"/>
                <meta name='keywords' content='Allard, Lavaritte, Art, non-fungible token, blockchain, financial, art, sold and exchanged'/>
                <meta property="og:url" content="https://lavaritte.com"/>
                <meta name="twitter:card" content="summary_large_image"/>

                {/* Non-Essential, But Recommended */}
                <meta property="og:description" content="Allard Lavaritte Website"/>
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