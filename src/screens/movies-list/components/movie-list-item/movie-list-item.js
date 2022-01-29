import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    StyledImage,
    TitleText,
    ReleaseDateText,
    AverageScore,
    StyledWrapper,
    ScoreWrapper,
    MovieInfoWrapper,
    BasicInfo,
    OtherInfo,
    MoviewInfo,
} from './styled';

export const ListItem = (props) => {
    const navigation = useNavigation();

    const { poster_path, title, release_date, popularity, vote_average, original_language, id } = props.item;

    const onPressItem = () => {
        navigation.navigate('Detail', {
            movieId: id
        })
    }
    return (
        <StyledWrapper activeOpacity={0.6} onPress={ onPressItem} >
            <StyledImage
                source={{ uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }}
            />
            <MovieInfoWrapper>
                <BasicInfo>
                    <TitleText>
                        {title}
                    </TitleText>
                    <MoviewInfo>
                        {`${release_date} | ${original_language?.toUpperCase()}`}
                    </MoviewInfo>
                </BasicInfo>
                <OtherInfo>
                    <ReleaseDateText>
                        {`Popularity: ${popularity}\nVote Average: ${vote_average}`}
                    </ReleaseDateText>
                </OtherInfo>
            </MovieInfoWrapper>
        </StyledWrapper>
    )
};
