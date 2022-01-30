import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { getTruncatedString, imagePrefixUrl, NAVIGATION_ROUTES, TEST_IDS } from '../../../utils';

import {
    StyledImage,
    TitleText,
    ReleaseDateText,
    AverageScore,
    StyledWrapper,
    ScoreWrapper
} from './styled';
import { propTypes,defaultProps } from './props';

export const ListCarousalItem =
    ({
        imageSrc,
        title,
        releaseDate,
        rating,
        id,
    }) => {

        const navigation = useNavigation();
        const onPressItem = () => {
            navigation.push(NAVIGATION_ROUTES.DETAIL, {
                movieId: id
            })
        }
        return (
            <StyledWrapper
                testID={TEST_IDS.CAROUSEL_ITEM_CONTAINER_WRAPPER}
                onPress={onPressItem}
                activeOpacity={0.6}
            >
                <StyledImage
                    testID={TEST_IDS.CAROUSEL_ITEM_IMAGE_CONTAINER}
                    source={{ uri: imagePrefixUrl+imageSrc }}
                />
                <ScoreWrapper>
                    <AverageScore testID={TEST_IDS.CAROUSEL_ITEM_RATING_CONTAINER} >
                        {rating}
                    </AverageScore>
                </ScoreWrapper>

                <TitleText testID={TEST_IDS.CAROUSEL_ITEM_TITLE_WRAPPER}>
                    {getTruncatedString(title, 30)}
                </TitleText>
                <ReleaseDateText>
                    {releaseDate}
                </ReleaseDateText>
            </StyledWrapper>
        )
    };

ListCarousalItem.propTypes = propTypes;
ListCarousalItem.defaultProps = defaultProps;
