import React from 'react'
import { BlogsData } from './BlogsData'
import { BlogsContaner, BlogsWrapper, BlogCard, RowPoster, BlogsRow,ImageContainer, Overlay, TextWrapper, OverlayTitile} from './BlogsElements'

const BlogsSection = () => {
    return (
        <BlogsContaner id="blogs">
                <BlogsWrapper>
                    <RowPoster>
                        <BlogsRow>
                            {BlogsData.map((BlogsDetail) =>{
                                return <>
                                    <ImageContainer key={BlogsDetail.id}>
                                    <BlogCard src={BlogsDetail.path} alt={BlogsDetail.alt}/>
                                        <Overlay>
                                            <TextWrapper><OverlayTitile>{BlogsDetail.title}</OverlayTitile></TextWrapper>
                                        </Overlay>
                                    </ImageContainer>
                                    </>
                            })}
                        </BlogsRow>
                    </RowPoster>
                </BlogsWrapper>
            </BlogsContaner>
    )
}

export default BlogsSection
