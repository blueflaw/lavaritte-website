import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { ReadMoreCardsContainer, ReadMoreCardWrapper, ReadMoreContainer, ReadMoreContent, ReadMoreContentH4, ReadMorePosterCard, ReadMorePost, ReadMoreP, AuthorName,
         ReadMoreumbnailWrapper, ReadMoreThumbnail, TextWrapper, ReadMoreInfoRow, ReadMoreHeader, Category, ReadMoreHeaderH1, TextWrap, CardTime, AuthorDisplayPicture, AuthorRow } from './ReadMoreElements';

export const ReadMoreBlogs = ({Data}) => {

    const toggleBlog = () => {
        scroll.scrollToTop();
        window.isNavNFTActive = false;
        window.isNavStoreActive = false;
        window.isNavAboutActive = false;
        window.isNavTutorialsActive = false;
        window.isNavBlogctive = false;
        window.isNavHomeActive = false;
    };

  return (
    <React.Fragment>
        <ReadMoreContainer>
            <ReadMoreContent>
                <ReadMoreContentH4>More to Read</ReadMoreContentH4>
            </ReadMoreContent>
            <ReadMoreCardsContainer>
                <ReadMoreCardWrapper>
                    {Data.map((DataDetail) => {
                        return <React.Fragment key={DataDetail.id}>
                            <ReadMorePosterCard to={DataDetail.link} onClick={() => { toggleBlog()}} smooth="true" duration={500} spy="true" exact="true" offset={-80}>
                                <ReadMorePost>
                                    <ReadMoreumbnailWrapper><ReadMoreThumbnail src={DataDetail.path} alt={DataDetail.alt}></ReadMoreThumbnail></ReadMoreumbnailWrapper>
                                    <TextWrapper dark={'dark'}>
                                        <TextWrap>
                                        <ReadMoreInfoRow>
                                            <ReadMoreHeader>
                                                <Category>{DataDetail.category}</Category>
                                            </ReadMoreHeader>
                                            <ReadMoreHeader>
                                                <CardTime>{DataDetail.time}</CardTime>
                                            </ReadMoreHeader>
                                        </ReadMoreInfoRow>
                                        <ReadMoreHeaderH1 dark={'dark'}>{DataDetail.title}</ReadMoreHeaderH1>
                                        <AuthorRow>
                                            <AuthorDisplayPicture src="https://cdnb.artstation.com/p/users/avatars/000/190/863/medium/02dbe259f43d1792bc174f3c536c8d4e.jpg" alt="author"/>
                                            <AuthorName>{DataDetail.author}</AuthorName>
                                        </AuthorRow>
                                        <ReadMoreInfoRow>
                                            <ReadMoreP>{DataDetail.preview}</ReadMoreP>
                                        </ReadMoreInfoRow>
                                        </TextWrap>
                                    </TextWrapper>
                                </ReadMorePost>
                            </ReadMorePosterCard>
                        </React.Fragment>
                    })}
                </ReadMoreCardWrapper>
            </ReadMoreCardsContainer>
        </ReadMoreContainer>
    </React.Fragment>
  )
}
