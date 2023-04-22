import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { DataMapWrapper, RowPoster, DataMapRow, DataMapPostWrap, DataMapPost, BlogTumbnailWrapper, BlogInfoHeader,
    DataMapThumbnail, TextWrapper, DataMapHeader, DataMapInfoRow, AuthorWrap, TextWrap, AuthorDisplayPicture, AuthorName, Category, CardTime, Preview} from './DataMapElements';

export const DataMap = ({Data, Dark, Hide}) => {
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
        <DataMapWrapper dark={Dark}>
            <RowPoster>
                <DataMapRow>
                    {Data.map((DataDetail) =>{
                        return  DataDetail.id !== Hide ? <React.Fragment key={DataDetail.id}>
                        <DataMapPostWrap to={DataDetail.link} onClick={() => {
                            toggleBlog();
                        }} smooth="true" duration={500} spy="true" exact="true" offset={-80}>
                            <DataMapPost>
                                <BlogTumbnailWrapper><DataMapThumbnail src={DataDetail.path} alt={DataDetail.alt} title={DataDetail.title} loading="lazy" width="auto" height="auto"/></BlogTumbnailWrapper>
                                <TextWrapper dark={Dark}>
                                    <TextWrap>
                                    <DataMapInfoRow>
                                        <BlogInfoHeader>
                                            <Category>{DataDetail.category}</Category>
                                        </BlogInfoHeader>
                                        <BlogInfoHeader>
                                            <CardTime>{DataDetail.time}</CardTime>
                                        </BlogInfoHeader>
                                    </DataMapInfoRow>
                                    <DataMapHeader dark={Dark}>{DataDetail.title}</DataMapHeader>
                                    {DataDetail.author ?
                                        <DataMapInfoRow>
                                            <AuthorWrap>
                                                <AuthorDisplayPicture src="https://cdnb.artstation.com/p/users/avatars/000/190/863/medium/02dbe259f43d1792bc174f3c536c8d4e.jpg" alt="author"  title={DataDetail.author} loading="lazy" width="auto" height="auto"/>
                                                <AuthorName>{DataDetail.author}</AuthorName>
                                            </AuthorWrap>
                                        </DataMapInfoRow>
                                    : null}
                                    <DataMapInfoRow><Preview>{DataDetail.preview}</Preview></DataMapInfoRow>
                                    </TextWrap>
                                </TextWrapper>
                            </DataMapPost>
                        </DataMapPostWrap>
                    </React.Fragment> : null
                    })}
                </DataMapRow>
            </RowPoster>
        </DataMapWrapper>
      </React.Fragment>
  )
}