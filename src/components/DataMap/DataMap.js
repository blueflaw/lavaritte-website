import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { DataMapWrapper, RowPoster, DataMapRow, DataMapPostWrap, DataMapPost, BlogTumbnailWrapper, BlogInfoHeader,
    DataMapThumbnail, TextWrapper, DataMapHeader, DataMapInfoRow, AuthorWrap, TextWrap, AuthorDisplayPicture, AuthorName, Category, CardTime} from './DataMapElements'

export const DataMap = ({Data, Dark}) => {
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
                        return <React.Fragment>
                            <DataMapPostWrap to={DataDetail.link} onClick={() => {
                                toggleBlog();
                            }} smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                                <DataMapPost key={DataDetail.id}>
                                    <BlogTumbnailWrapper><DataMapThumbnail key={DataDetail.id} src={DataDetail.path} alt={DataDetail.alt}/></BlogTumbnailWrapper>
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
                                        <DataMapInfoRow>
                                            <AuthorWrap>
                                                <AuthorDisplayPicture src="https://cdnb.artstation.com/p/users/avatars/000/190/863/medium/02dbe259f43d1792bc174f3c536c8d4e.jpg" alt="author"/>
                                                <AuthorName>by {DataDetail.author}</AuthorName>
                                            </AuthorWrap>
                                        </DataMapInfoRow>
                                        </TextWrap>
                                    </TextWrapper>
                                </DataMapPost>
                            </DataMapPostWrap>
                        </React.Fragment>
                    })}
                </DataMapRow>
            </RowPoster>
        </DataMapWrapper>
      </React.Fragment>
  )
}