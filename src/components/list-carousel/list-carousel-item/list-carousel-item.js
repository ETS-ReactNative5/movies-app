import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    StyledImage,
    TitleText,
    ReleaseDateText,
    AverageScore,
    StyledWrapper,
    ScoreWrapper
} from './styled';

import { getTruncatedString } from '../../../utils';

export const ListCarousalItem = ({ imageSrc, title, releaseDate, rating, id }) => {

    const navigation = useNavigation();

    const onPressItem = () => {
        navigation.push("Detail", {
            movieId: id
        })
    }

    return (
        <StyledWrapper
            testID='container-wrapper'
            onPress={onPressItem}
            activeOpacity={0.6}
        >
            <StyledImage
                testID='image-container'
                source={{ uri: `https://image.tmdb.org/t/p/w500/${imageSrc}` }}
            />
            <ScoreWrapper>
                <AverageScore testID='rating-container' >
                    {rating}
                </AverageScore>
            </ScoreWrapper>

            <TitleText testID='title-wrapper'>
                {getTruncatedString(title, 30)}
            </TitleText>
            <ReleaseDateText>
                {releaseDate}
            </ReleaseDateText>
        </StyledWrapper>
    )
};
