import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const StyledImage = styled(FastImage)`
    resize-mode: cover;
    width: 130px;
    height: 150px;
    border-radius: 15px;
`;

export const TitleText = styled.Text`
    font-weight: bold;
    font-size: 16;
    margin-bottom: 5px;
    width: 130px;
    text-align: center;
    margin-top: 15px;
    color: black;
`;

export const TextWrapper = styled.View``;

export const ReleaseDateText = styled.Text`
    color: black;
`;

export const ScoreWrapper = styled.View`
    position: absolute;
    background: #4a0909;
    top: 145px;
    left: 25px;
    padding: 5px;
    border-radius: 15px;

`;
export const AverageScore = styled.Text`
    font-size: 15;
    color: white;
    font-weight: bold;
`;

export const StyledWrapper = styled.TouchableOpacity` 
    align-items: center;
    padding: 10px;
`;
