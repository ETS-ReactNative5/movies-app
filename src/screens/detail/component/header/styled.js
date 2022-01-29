import FastImage from 'react-native-fast-image';

import styled from 'styled-components/native';

export const ImageWrapper = styled(FastImage)`
    width: 130px;
    height: 150px;
    border-radius: 15px;
    margin-right: 12px;
`;

export const HeaderWrapper = styled.View`
    flex-direction: row;
    margin: 10px;
    align-items: center;
    background: #535658;
    flex:1;
    border-radius: 8px;
    padding-vertical: 8px;
`;

export const InfoWrapper = styled.View`
    width:60%;
`;

export const OverView = styled.Text`
    font-size: 12px;
    color: white;
    font-family: al nile;
`;

export const Title = styled.Text`
    font-weight: bold;
`;

export const GenreWrapper = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 6px;
`;

export const GenreItem = styled.View`
    border-radius: 15px;
    background: black;
    opacity: 0.7;
    padding: 5px;
    margin-top: 6px;
    margin-right: 6px;
`;

export const Stats = styled.View`
    margin-top: 3px;
    flex-direction:row;
    justify-content: space-between;
`;