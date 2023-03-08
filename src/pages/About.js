import React, {useState} from 'react';
import TheWebsite from '../components/AboutSection/Index';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { Helmet } from 'react-helmet';

const AboutTheWebsite = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
    return (
        <>
            <Helmet>
                {/* Essential META Tags  */}
                <meta property="og:title" content="About Allard Lavaritte"/>
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://cdna.artstation.com/p/assets/images/images/039/733/768/large/allard-lavaritte-valorant-female-breach.jpg?1626784012" />
                <meta name='keywords' content='Allard, Lavaritte, About, art, how to, tutorial'/>
                <meta property="og:url" content="https://lavaritte.com/about"/>
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
            <TheWebsite/>
            <ScrollToTop/>
            <Footer/>     
            
        </>
    )
}

export default AboutTheWebsite
