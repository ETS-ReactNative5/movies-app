
import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import ImageView from "react-native-image-viewing";
import FastImage from 'react-native-fast-image';

import { imagePrefixUrl } from '../../../../utils';

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

import { defaultProps, propTypes } from './props';


export const Header =
    ({
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
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => setIsVisible(true)}>
                        <ImageWrapper
                            source={{ uri: imagePrefixUrl + imgSrc }}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                    </TouchableOpacity>
                    <InfoWrapper>
                        <Title >
                            {title}
                        </Title>

                        <Stats>
                            <Text
                                style={{ fontWeight: 'bold', color: 'white', fontSize: 12 }}
                            >
                                {`${releaseDate} | ${language}`}
                            </Text>

                            <Text
                                style={{ color: 'white', fontSize: 13 }} >
                                {popularity}
                            </Text>
                            <Text
                                style={{ color: 'white', fontSize: 13 }} >
                                {voteAvg}
                            </Text>
                        </Stats>

                        <GenreWrapper>
                            {
                                genres?.map((genre) => {
                                    return (
                                        <GenreItem key={genre.name} >
                                            <Text
                                                style={{ color: 'white', fontSize: 12 }}
                                            >
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
                    images={[{ uri: imagePrefixUrl + imgSrc }]}
                    imageIndex={0}
                    visible={visible}
                    onRequestClose={() => setIsVisible(false)}
                />
            </React.Fragment>
        )
    };


Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
