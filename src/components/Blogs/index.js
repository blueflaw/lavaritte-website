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
                            {/* use this template */}
                            {BlogsData.map((BlogsDetail) =>{
                                return <React.Fragment>
                                    {/* <animated.div onMouseEnter={
                                            ({ clientX: x, clientY: y }) => {set({ xys: calc(x, y) });
                                            console.log('this card');
                                        }}
                                        onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                        style={{ transform: props.xys.interpolate(trans) }}> */}
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
                                                    {/* <Prize>Read More <FaAngleDoubleRight/></Prize> */}
                                                </BlogsInfoRow>
                                                </TextWrap>
                                            </TextWrapper>
                                        </BlogsPost>
                                    </BlogsPostWrap>
                                    {/* </animated.div> */}
                                </React.Fragment>
                            })}
                        </BlogsRow>
                    </RowPoster>
                </BlogsWrapper>
        </BlogsContaner>
    )
}

export default BlogsSection
