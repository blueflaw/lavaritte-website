import React, {useRef} from 'react'
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import { NFTCollectionData } from './NFTCollectionData';
import { FaEthereum } from 'react-icons/fa';
import { TextWrapper, NFTContainer,NFTContainer2, NFTWrapper, Heading, Subtitle, NFTCollectionWrapper, HeroContainer, HeroContent, HeroH1, RowPoster, NFTCollectionRow,
         NFTCollectionPostWrap, NFTCollectionPost, NFTCollectionTextWrapper, NFTCollectionTextWrap, NFTCollectionInfoRow, NFTInfoHeader, Category, PriceTag, NFTCollectionHeader,
         AuthorWrap, NFTTumbnailWrapper, AuthorDisplayPicture, AuthorName, NFTCollectionThumbnail } from './NFTElements'
import { NFTsData1, NFTsData2 } from './NFTData'

const NFTSection = () => {
    const treshold = 0.9;
    // ref for our element
    const sectionRef1 = useRef(null);
    const sectionRef2 = useRef(null);
    // All the ref to be observed
    const intersection = useIntersection(sectionRef1,{
        root: null,
        rootMargin: "0px",
        threshold: treshold
    });
    const intersection2 = useIntersection(sectionRef2,{
        root: null,
        rootMargin: "0px",
        threshold: treshold
    });
    //Animation for fading in
    const fadeIn =  element => {
        gsap.to(element, 1, {
            opacity: 1,
            x: 0,
            stagger: { amount: 0.3}
        });
    };

    //Animation for fading out
    const fadeOut = element => {
        gsap.to(element, 1, {
            opacity: 0,
            x: 90,
            ease: 'power4.out'
        });
    };

    // checking to see when the viewport is visible to the user
    intersection && intersection.intersectionRatio < treshold ? fadeOut(".section1") : fadeIn(".section1");
    intersection2 && intersection2.intersectionRatio < treshold ? fadeOut(".section2") : fadeIn(".section2");
    
    return (
        <div id='NFT'>
            <HeroContainer>
                <HeroContent>
                    <HeroH1 >NFT RELEASES</HeroH1>
                </HeroContent>
            </HeroContainer>

            <NFTContainer>
            <NFTWrapper></NFTWrapper>
                <NFTWrapper>
                        <TextWrapper className="section1" ref={sectionRef1}>
                            <Heading>{NFTsData1.headline}</Heading>
                            <Subtitle>{NFTsData1.description}</Subtitle>
                        </TextWrapper>
                </NFTWrapper>
            </NFTContainer>

            <NFTCollectionWrapper>
                <RowPoster>
                    <NFTCollectionRow>
                        {NFTCollectionData.map((NFTCollectionDetail) =>{
                            return <React.Fragment>
                                <NFTCollectionPostWrap href={NFTCollectionDetail.link} target="_blank">
                                    <NFTCollectionPost key={NFTCollectionDetail.id}>
                                        <NFTTumbnailWrapper><NFTCollectionThumbnail key={NFTCollectionDetail.id} src={NFTCollectionDetail.path} alt={NFTCollectionDetail.alt}/></NFTTumbnailWrapper>
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
                                                    <AuthorDisplayPicture src={NFTCollectionDetail.authorDP} alt={NFTCollectionDetail.authorALT}/>
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
            </NFTCollectionWrapper>

            <NFTContainer2>
                <NFTWrapper>
                    <TextWrapper className="section2" ref={sectionRef2}>
                        <Subtitle></Subtitle>
                        <Heading >{NFTsData2.headline}</Heading>
                    </TextWrapper>
                </NFTWrapper>
                <NFTWrapper></NFTWrapper>
            </NFTContainer2>
        </div>
    )
}

export default NFTSection
