import React, { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import ImageView from "react-native-image-viewing";
import { StyledImage, StyledWrapper, Character, Name } from './styled';

import { CarouselListHeader, CarouselListWrapper, HeaderContainer, ViewAll } from './styled';


export const CastCarousel = ({ casts, headerTitle }) => {
    const [visible, setIsVisible] = useState(false);
    const [path, setPath] = useState('');

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
                        <TouchableOpacity activeOpacity={0.6} onPress={() => {
                            setIsVisible(true);
                            setPath(`https://image.tmdb.org/t/p/w500/${item.profile_path}`);
                        }} >
                            <StyledImage
                                source={{ uri: `https://image.tmdb.org/t/p/w500/${item.profile_path}` }}
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
                onRequestClose={() => {
                    setIsVisible(false);
                    setPath(null);
                }}
            />
        </CarouselListWrapper>

    )
};