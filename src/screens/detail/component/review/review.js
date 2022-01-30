
import React from 'react';
import { Text } from 'react-native';

import FastImage from 'react-native-fast-image';
import { emptyPlaceholder, getTruncatedString, imagePrefixUrl, TEST_IDS } from '../../../../utils/index';

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
    const revieweeName = name ? `A review by ${name}` : 'Anonymous';

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(created_at).toLocaleString('en-US', options);
    
    const getImageUrl = (url) => {
        if (url?.includes('https')) {
            return url.slice(1);
        } else if (url) {
            return imagePrefixUrl + url;
        } else {
            return emptyPlaceholder;
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
                        <UserName testID={TEST_IDS.REVIEW_CARD_REVIEWEE_NAME} >
                            {revieweeName}
                        </UserName>
                        {
                            rating && (
                                <AverageScore >
                                    <Text
                                        style={{ color: 'white' }}
                                        testID={TEST_IDS.REVIEW_CARD_AVERAGE_SCORE}
                                    >
                                        {rating}
                                    </Text>
                                </AverageScore>)
                        }

                    </StyledWrapper>
                    {
                        formattedDate && (
                            <ReviewData testID={TEST_IDS.REVIEW_CARD_DATE} >
                                {`Written on ${formattedDate}`}
                            </ReviewData>
                        )
                    }

                </UserInfo>

                <ReviewText testID={TEST_IDS.REVIEW_CARD_CONTENT} >
                    {getTruncatedString(content, 200)}
                </ReviewText>

            </MovieReviewWrapper>

        </Container>

    )
};

