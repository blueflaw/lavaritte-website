import React from 'react'
import { BlogsData } from './BlogsData'
import { FaAngleDoubleRight } from 'react-icons/fa';
import { BlogsContaner, BlogsWrapper, RowPoster, BlogsRow, BlogPost, BlogThumbnail, BlogTumbnailWrapper, 
            BlogHeader, TextWrapper, BlogMeta, BlogEntry, Preview, TextWrap, BlogPostWrap, Readmore} from './BlogsElements'

const BlogsSection = () => {
    return (
        <BlogsContaner id="blogs">
                <BlogsWrapper>
                    <RowPoster>
                        <BlogsRow>
                            {/* use this template */}
                            {BlogsData.map((BlogsDetail) =>{
                                return <React.Fragment>
                                    <BlogPostWrap to={BlogsDetail.link}>
                                        <BlogPost key={BlogsDetail.id}>
                                            <BlogTumbnailWrapper><BlogThumbnail src={BlogsDetail.path} alt={BlogsDetail.alt}/></BlogTumbnailWrapper>
                                            <TextWrapper>
                                                <TextWrap>
                                                <BlogHeader>{BlogsDetail.title}</BlogHeader>
                                                <BlogMeta>{BlogsDetail.meta}</BlogMeta>
                                                <BlogEntry><Preview>{BlogsDetail.preview}</Preview></BlogEntry>
                                                <Readmore>Read More <FaAngleDoubleRight/></Readmore>
                                                </TextWrap>
                                            </TextWrapper>
                                        </BlogPost>
                                    </BlogPostWrap>
                                </React.Fragment>
                            })}
                        </BlogsRow>
                    </RowPoster>
                </BlogsWrapper>
        </BlogsContaner>
    )
}

export default BlogsSection
