
import React from 'react';
import { Text } from 'react-native';

import FastImage from 'react-native-fast-image';
import { getTruncatedString } from '../../../../utils/index';

import {
    ReviewText,
    ReviewData,
    AverageScore,
    UserInfo,
    UserName,
    Image,
    MovieReviewWrapper,
    ImageWrapper,
    Container,
    StyledWrapper,
} from './styled';

export const ReviewCard = ({ review }) => {

    const {
        content,
        created_at,
        author_details
    } = review;


    const { name, rating, avatar_path } = author_details;
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(created_at).toLocaleString('en-US', options);
    const revieweeName = name ? `A review by ${name}` : 'Anonymous';

    const getImageUrl = (url) => {
        if (url?.includes('https')) {
            return url.slice(1);
        } else if (url) {
            return `https://image.tmdb.org/t/p/w500/${url}`
        } else {
            return 'https://png.pngtree.com/png-clipart/20210915/ourlarge/pngtree-user-avatar-placeholder-black-png-image_3918427.jpg'
        }
    }

    return (

        <Container>
            <ImageWrapper>
                <Image
                    source={{ uri: getImageUrl(avatar_path) }}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </ImageWrapper>

            <MovieReviewWrapper>
                <UserInfo>
                    <StyledWrapper>
                        <UserName>
                            {revieweeName}
                        </UserName>
                        {
                            rating && (<AverageScore>
                                <Text style={{ color: 'white' }} >
                                    {rating}
                                </Text>
                            </AverageScore>)
                        }

                    </StyledWrapper>
                    {
                        formattedDate && (
                            <ReviewData>
                                {`Witten on ${formattedDate}`}
                            </ReviewData>
                        )
                    }

                </UserInfo>

                <ReviewText>
                    {getTruncatedString(content, 200)}
                </ReviewText>

            </MovieReviewWrapper>

        </Container>

    )
};

