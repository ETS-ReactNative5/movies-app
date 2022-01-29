
import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import ImageView from "react-native-image-viewing";
import FastImage from 'react-native-fast-image';

import {
    ImageWrapper,
    HeaderWrapper,
    InfoWrapper,
    OverView,
    Title,
    GenreItem,
    Stats,
    GenreWrapper,
} from './styled';

export const Header = ({
    language,
    title,
    overview,
    imgSrc,
    popularity,
    releaseDate,
    voteAvg,
    genres,
}) => {

    const [visible, setIsVisible] = useState(false);

    return (
        <React.Fragment>
            <HeaderWrapper>
                <TouchableOpacity activeOpacity={0.6} onPress={() => setIsVisible(true)}>
                    <ImageWrapper
                        source={{ uri: `https://image.tmdb.org/t/p/w500/${imgSrc}` }}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </TouchableOpacity>

                <InfoWrapper>
                    <Title>
                        {title}
                    </Title>

                    <Stats>
                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 12 }} >
                            {`${releaseDate} | ${language}`}
                        </Text>

                        <Text style={{ color: 'white', fontSize: 13 }} >
                            {popularity}
                        </Text>
                        <Text style={{ color: 'white', fontSize: 13 }} >
                            {voteAvg}
                        </Text>
                    </Stats>

                    <GenreWrapper>
                        {
                            genres?.map((genre) => {
                                return (
                                    <GenreItem>
                                        <Text style={{ color: 'white', fontSize: 12 }} >
                                            {genre.name}
                                        </Text>
                                    </GenreItem>
                                )
                            })
                        }
                    </GenreWrapper>

                    <OverView>
                        {overview}
                    </OverView>

                </InfoWrapper>
            </HeaderWrapper>
            <ImageView
                images={[{ uri: `https://image.tmdb.org/t/p/w500/${imgSrc}` }]}
                imageIndex={0}
                visible={visible}
                onRequestClose={() => setIsVisible(false)}
            />
        </React.Fragment>
    )
};


