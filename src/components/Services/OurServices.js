import React, {useState} from 'react';
import { OurServicesBtnWrapper, OurServicesColumnLeft, OurServicesColumnRight, OurServicesContainer, OurServicesH1, OurServicesHeader, OurServicesP, OurServicesTextWrapper, 
    OurServicesTopLine, TableCell, TableContainer, TableRow, OurServicesIcon, OurServicesHeaderH3, OurServicesDescription } from './OurServicesElements';
import { ButtonStartProject } from '../ButtonElements';
import { ArrowForward, ArrowRight } from '../HeroSection/HeroElements';

export const OurServices = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
  return (
    <React.Fragment>
        <OurServicesContainer>
            <OurServicesHeader>
                <OurServicesColumnLeft>
                    <OurServicesTextWrapper>
                        <OurServicesTopLine>What are you looking for</OurServicesTopLine>
                        <OurServicesH1>OUR SERVICES</OurServicesH1>
                        <OurServicesP>
                        At lavaritte.com, we specialize in providing comprehensive solutions to elevate your online presence and drive your business forward. Our range of services includes:
                        </OurServicesP>
                    </OurServicesTextWrapper>
                </OurServicesColumnLeft>
                <OurServicesColumnRight>
                    <OurServicesBtnWrapper>
                        <ButtonStartProject onMouseEnter={onHover} onMouseLeave={onHover}>Let's Work {hover ?  <ArrowForward/>:<ArrowRight/>}</ButtonStartProject>
                    </OurServicesBtnWrapper>
                </OurServicesColumnRight>
            </OurServicesHeader>
            <TableContainer>
            <tbody>
                <TableRow>
                    <TableCell>
                    <OurServicesIcon src={require('../../images/OurServices/WebApp.png')} alt='web application' title='web application'>
                    </OurServicesIcon>
                    <OurServicesHeaderH3>Web Application</OurServicesHeaderH3>
                    <OurServicesDescription> Transform your ideas into powerful web applications tailored to your specific needs.</OurServicesDescription>
                    </TableCell>
                    <TableCell>
                    <OurServicesIcon src={require('../../images/OurServices/UIUX.png')}  alt='UIUX' title='UIUX'/>
                    <OurServicesHeaderH3>UI/UX</OurServicesHeaderH3>
                    <OurServicesDescription>Craft intuitive and visually stunning user interfaces to enhance user experience and engagement.</OurServicesDescription>
                    </TableCell>
                    <TableCell>
                    <OurServicesIcon src={require('../../images/OurServices/Martketing.png')}  alt='Marketing Strategies' title='Marketing Strategies'/>
                    <OurServicesHeaderH3>Marketing Strategies</OurServicesHeaderH3>
                    <OurServicesDescription>Drive growth and reach your target audience with effective digital marketing strategies tailored to your business goals.</OurServicesDescription>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                    <OurServicesIcon src={require('../../images/OurServices/WebDev.png')} alt='Web Development' title='Web Development'>
                    </OurServicesIcon>
                    <OurServicesHeaderH3>Web Development</OurServicesHeaderH3>
                    <OurServicesDescription>From simple websites to complex web platforms, we build robust and scalable solutions using cutting-edge technologies</OurServicesDescription>
                    </TableCell>
                    <TableCell>
                    <OurServicesIcon src={require('../../images/OurServices/Design.png')}  alt='Design' title='Design'/>
                    <OurServicesHeaderH3>Design</OurServicesHeaderH3>
                    <OurServicesDescription>Whether it's branding, graphic design, or multimedia, we create captivating designs that resonate with your audience.</OurServicesDescription>
                    </TableCell>
                    <TableCell>
                    <OurServicesIcon src={require('../../images/OurServices/SEO.png')}  alt='Marketing Strategies' title='Marketing Strategies'/>
                    <OurServicesHeaderH3>SEO Optimization</OurServicesHeaderH3>
                    <OurServicesDescription> Improve your website's visibility and ranking on search engines to attract more organic traffic and increase conversions.</OurServicesDescription>
                    </TableCell>
                </TableRow>
            </tbody>
        </TableContainer>
        </OurServicesContainer>
    </React.Fragment>
  )
}
