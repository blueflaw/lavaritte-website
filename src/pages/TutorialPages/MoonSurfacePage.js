import React, {useState} from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import ScrollUp from '../../components/ScrollUp/Index';
import { MoonSurface } from '../../components/TutorialSection/TutorialPages/MoonSurface'
import { Helmet } from 'react-helmet';

export const MoonSurfacePage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen (!isOpen)
    }
  return (
      <React.Fragment>
        <Helmet>
          <meta name='description'  content="Allard Lavaritte's Moon Surface Tutorial || procedural textures in Blender!"/>
          <meta name='keywords'     content='Allard, Lavaritte, How to draw create moon surface in blender'/> 
          <meta name="image"        content="https://cdnb.artstation.com/p/assets/images/images/056/930/243/20221207093023/smaller_square/allard-lavaritte-darkness-demon-final.jpg?1670427024" />
          <meta name='keywords'     content='Allard, Lavaritte, moon, surface, blender, photoshop, procedural, textures'/>
        </Helmet>
        <ScrollToTop/>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <MoonSurface/>
        <ScrollUp/> 
        <Footer/>  
      </React.Fragment>   
  )
}
