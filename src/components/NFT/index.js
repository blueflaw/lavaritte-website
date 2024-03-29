import React, { useRef, useState, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NFTCollectionData } from './NFTCollectionData';
import { FaEthereum, FaAngleRight, FaArrowRight } from 'react-icons/fa';
import { NFTContainer, NFTWrapper, Heading, Subtitle, NFTCollectionWrapper, HeroContainer, HeroContent, HeroH1, RowPoster, NFTCollectionRow,
         NFTCollectionPostWrap, NFTCollectionPost, NFTCollectionTextWrapper, NFTCollectionTextWrap, NFTCollectionInfoRow, NFTInfoHeader, Category, PriceTag, NFTCollectionHeader,
         AuthorWrap, NFTTumbnailWrapper, AuthorDisplayPicture, AuthorName, NFTCollectionThumbnail, ButtonWrapper, ButtonViewCollection, ButtonDown } from './NFTElements';
import { NFTsData1, NFTsData2 } from './NFTData';
import { FaChevronDown} from 'react-icons/fa';
import { Newsletter } from '../Newsletter/Newsletter';

const NFTSection = () => {
    gsap.registerPlugin(ScrollTrigger);
    const sectionRef1 = useRef(null);
    const sectionRef2 = useRef(null);
    const sectiontrigger = useRef(null);
    const sectiontrigger2 = useRef(null);

    useEffect(() => {
        const el = sectionRef1.current;
        const trig = sectiontrigger.current;
        gsap.fromTo(
            el,
            {
              opacity: 0,
              xPercent: -20
            },
            {
              opacity: 1,
              xPercent: 0,
              scrollTrigger: {
                trigger: trig,
                start: "top top",
                end: "bottom center",
                scrub: true
              }
            }
          );
    }, []);
    useEffect(() => {
        const el = sectionRef2.current;
        const trig = sectiontrigger2.current;
        gsap.fromTo(
            el,
            {
              opacity: 0,
              xPercent: -20
            },
            {
              opacity: 1,
              xPercent: 0,
              scrollTrigger: {
                trigger: trig,
                start: "top top",
                end: "bottom center",
                scrub: true
              }
            }
          );
    }, []);

    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
    
    return (
        <React.Fragment id='NFT' >
            <HeroContainer ref={sectiontrigger}>
                <HeroContent>
                    <HeroH1>NFT RELEASES</HeroH1>
                    <ButtonDown to={'NFTCollection'} smooth="true" duration={500} spy={true} exact="true" offset={-80} ><FaChevronDown/></ButtonDown>
                </HeroContent>
            </HeroContainer>

            <NFTContainer >
                <NFTWrapper ref={sectionRef1}>
                        <Heading>{NFTsData1.headline}</Heading>
                        <Subtitle>{NFTsData1.description}</Subtitle>
                </NFTWrapper>
            </NFTContainer>

            <NFTCollectionWrapper id='NFTCollection' ref={sectiontrigger2}>
                <RowPoster>
                    <NFTCollectionRow>
                        {NFTCollectionData.map((NFTCollectionDetail) =>{
                            return <React.Fragment key={NFTCollectionDetail.id}>
                                <NFTCollectionPostWrap href={NFTCollectionDetail.link} target="_blank">
                                    <NFTCollectionPost >
                                        <NFTTumbnailWrapper><NFTCollectionThumbnail src={NFTCollectionDetail.path} alt={NFTCollectionDetail.alt} title={NFTCollectionDetail.title} loading="lazy" width="auto" height="auto"/></NFTTumbnailWrapper>
                                        <NFTCollectionTextWrapper>
                                            <NFTCollectionTextWrap>
                                            <NFTCollectionInfoRow>
                                                <NFTInfoHeader>
                                                    <Category>{NFTCollectionDetail.category}</Category>
                                                </NFTInfoHeader>
                                                <NFTInfoHeader>
                                                    <PriceTag><FaEthereum/>{NFTCollectionDetail.price}</PriceTag>
                                                </NFTInfoHeader>
                                            </NFTCollectionInfoRow>
                                            <NFTCollectionHeader>{NFTCollectionDetail.title}</NFTCollectionHeader>
                                            <NFTCollectionInfoRow>
                                                <AuthorWrap>
                                                    <AuthorDisplayPicture src={NFTCollectionDetail.authorDP} alt={NFTCollectionDetail.authorALT} title={NFTCollectionDetail.author} loading="lazy" width="auto" height="auto"/>
                                                    <AuthorName>by {NFTCollectionDetail.author}</AuthorName>
                                                </AuthorWrap>
                                            </NFTCollectionInfoRow>
                                            </NFTCollectionTextWrap>
                                        </NFTCollectionTextWrapper>
                                    </NFTCollectionPost>
                                </NFTCollectionPostWrap>
                            </React.Fragment>
                        })}
                    </NFTCollectionRow>
                </RowPoster>
                <ButtonWrapper>
                    <ButtonViewCollection
                        href='https://opensea.io/blueflaw' 
                        target='_blank'
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}>View All Collection &nbsp;&nbsp; {hover ? <FaAngleRight /> : <FaArrowRight/>}
                    </ButtonViewCollection>
                </ButtonWrapper>
            </NFTCollectionWrapper>
            <NFTContainer>
                <NFTWrapper ref={sectionRef2}>
                        <Heading>{NFTsData2.headline}</Heading>
                </NFTWrapper>
            </NFTContainer>
            <Newsletter/>
        </React.Fragment>
    )
}

export default NFTSection
