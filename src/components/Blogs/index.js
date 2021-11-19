import React from 'react'
import { BlogsData } from './BlogsData'
import { BlogsContaner, BlogsWrapper, RowPoster, BlogsRow, BlogPost, BlogThumbnail, BlogTumbnailWrapper, 
            BlogHeader, TextWrapper, BlogMeta, BlogEntry, Preview, TextWrap, BlogPostWrap} from './BlogsElements'

const BlogsSection = () => {
    return (
        <BlogsContaner id="blogs">
                <BlogsWrapper>
                    <RowPoster>
                        <BlogsRow>
                            {/* use this template */}
                            {BlogsData.map((BlogsDetail) =>{
                                return <>
                                <BlogPostWrap to={BlogsDetail.link}>
                                    <BlogPost key={BlogsDetail.id}>
                                        <BlogTumbnailWrapper><BlogThumbnail src={BlogsDetail.path} alt={BlogsDetail.alt}/></BlogTumbnailWrapper>
                                        <TextWrapper>
                                            <TextWrap>
                                            <BlogHeader>{BlogsDetail.title}</BlogHeader>
                                            <BlogMeta>By&nbsp;&nbsp;| 23 November | 3 Comments</BlogMeta>
                                            <BlogEntry><Preview>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</Preview></BlogEntry>
                                            </TextWrap>
                                        </TextWrapper>
                                    </BlogPost>
                                </BlogPostWrap>
                                </>
                            })}
                        </BlogsRow>
                    </RowPoster>
                </BlogsWrapper>
        </BlogsContaner>
    )
}

export default BlogsSection
