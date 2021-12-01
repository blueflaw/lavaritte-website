import React from 'react'
import { StoreData } from './StoreData'
import { StoreContaner, StoreWrapper, RowPoster, StoreRow, StorePostWrap, StorePost, AuthorDisplayPicture, Prize,   
        StoreTumbnailWrapper, StoreThumbnail, TextWrapper, TextWrap, StoreHeader, StoreInfoRow, AuthorName, AuthorWrap} from './StoreElements'

const Store = () => {
    return (
        <StoreContaner id="store">
                <StoreWrapper>
                    <RowPoster>
                        <StoreRow>
                            {/* use this template */}
                            {StoreData.map((StoreDetail) =>{
                                return <React.Fragment>
                                    <StorePostWrap href={StoreDetail.link} target="_blank">
                                        <StorePost key={StoreDetail.id}>
                                            <StoreTumbnailWrapper><StoreThumbnail key={StoreDetail.id} src={StoreDetail.imagePath.default} alt={StoreDetail.alt}/></StoreTumbnailWrapper>
                                            <TextWrapper>
                                                <TextWrap>
                                                <StoreHeader>{StoreDetail.title}</StoreHeader>
                                                <StoreInfoRow>
                                                    <AuthorWrap>
                                                        <AuthorDisplayPicture src="https://cdnb.artstation.com/p/users/avatars/000/190/863/medium/02dbe259f43d1792bc174f3c536c8d4e.jpg" alt="author"/>
                                                        <AuthorName>by {StoreDetail.author}</AuthorName>
                                                    </AuthorWrap>
                                                    <Prize>{StoreDetail.prize}</Prize>
                                                </StoreInfoRow>
                                                </TextWrap>
                                            </TextWrapper>
                                        </StorePost>
                                    </StorePostWrap>
                                </React.Fragment>
                            })}
                        </StoreRow>
                    </RowPoster>
                </StoreWrapper>
        </StoreContaner>
    )
}

export default Store
