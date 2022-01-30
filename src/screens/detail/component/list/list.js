import React, { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import ImageView from "react-native-image-viewing";
import { imagePrefixUrl } from '../../../../utils';

import {
    CarouselListHeader,
    CarouselListWrapper,
    HeaderContainer,
    StyledImage,
    StyledWrapper,
    Character,
    Name,
} from './styled';

import { defaultProps, propTypes } from './props';

export const CastCarousel =
    ({
        casts,
        headerTitle,
    }) => {

        const [visible, setIsVisible] = useState(false);
        const [path, setPath] = useState('');

        const onPressImage = (item) => {
            setIsVisible(true);
            setPath(imagePrefixUrl + item.profile_path);
        };

        const onCloseImage = () => {
            setIsVisible(false);
            setPath(null);
        };

        return (
            <CarouselListWrapper>
                <HeaderContainer>
                    <CarouselListHeader>
                        {headerTitle}
                    </CarouselListHeader>
                </HeaderContainer>

                <FlatList
                    horizontal
                    data={casts}
                    keyboardShouldPersistTaps='handled'
                    keyExtractor={(item) => `list-carousel-${item.id}`}
                    listKey={Math.random().toString()}
                    renderItem={({ item }) => (
                        <StyledWrapper>
                            <TouchableOpacity activeOpacity={0.6} onPress={()=>onPressImage(item)} >
                                <StyledImage
                                    source={{ uri: imagePrefixUrl + item.profile_path }}
                                />
                            </TouchableOpacity>

                            <Name>
                                {item.name}
                            </Name>
                            <Character>
                                {item.character}
                            </Character>
                        </StyledWrapper>
                    )}
                />
                <ImageView
                    images={[{ uri: path }]}
                    imageIndex={0}
                    visible={!!path && visible}
                    onRequestClose={onCloseImage}
                />
            </CarouselListWrapper>

        )
    };

CastCarousel.propTypes = propTypes;
CastCarousel.defaultProps = defaultProps;
