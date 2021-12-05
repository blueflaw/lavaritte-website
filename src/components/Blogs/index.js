import React from 'react'
import { BlogsData } from './BlogsData'
import { BlogsContaner, BlogsWrapper, RowPoster, BlogsRow, BlogsPostWrap, BlogsPost, BlogTumbnailWrapper, BlogInfoHeader,
         BlogsThumbnail, TextWrapper, BlogsHeader, BlogsInfoRow, AuthorWrap, TextWrap, AuthorDisplayPicture, AuthorName, Category, CardTime} from './BlogsElements'
const BlogsSection = () => {
    
    return (
        <BlogsContaner id="blogs">
                <BlogsWrapper>
                    <RowPoster>
                        <BlogsRow>
                            {BlogsData.map((BlogsDetail) =>{
                                return <React.Fragment>
                                    <BlogsPostWrap to={BlogsDetail.link} >
                                        <BlogsPost key={BlogsDetail.id}>
                                            <BlogTumbnailWrapper><BlogsThumbnail key={BlogsDetail.id} src={BlogsDetail.path} alt={BlogsDetail.alt}/></BlogTumbnailWrapper>
                                            <TextWrapper>
                                                <TextWrap>
                                                <BlogsInfoRow>
                                                    <BlogInfoHeader>
                                                        <Category>{BlogsDetail.category}</Category>
                                                    </BlogInfoHeader>
                                                    <BlogInfoHeader>
                                                        <CardTime>{BlogsDetail.time}</CardTime>
                                                    </BlogInfoHeader>
                                                </BlogsInfoRow>
                                                <BlogsHeader>{BlogsDetail.title}</BlogsHeader>
                                                <BlogsInfoRow>
                                                    <AuthorWrap>
                                                        <AuthorDisplayPicture src="https://cdnb.artstation.com/p/users/avatars/000/190/863/medium/02dbe259f43d1792bc174f3c536c8d4e.jpg" alt="author"/>
                                                        <AuthorName>by {BlogsDetail.author}</AuthorName>
                                                    </AuthorWrap>
                                                </BlogsInfoRow>
                                                </TextWrap>
                                            </TextWrapper>
                                        </BlogsPost>
                                    </BlogsPostWrap>
                                </React.Fragment>
                            })}
                        </BlogsRow>
                    </RowPoster>
                </BlogsWrapper>
        </BlogsContaner>
    )
}

export default BlogsSection
