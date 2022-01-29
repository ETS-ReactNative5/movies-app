import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const StyledImage = styled(FastImage)`
    resize-mode: cover;
    width: 130px;
    height: 180px;
    border-radius: 15px;
`;

export const TitleText = styled.Text`
    font-size: 16;
    font-weight: bold;
    margin-bottom: 5px;
    padding-left: 12px;
    margin-top: 15px;
`;

export const TextWrapper = styled.View`
`;

export const ReleaseDateText = styled.Text`
    font-size: 16;
    padding-left: 12px;
`;

export const MoviewInfo = styled.Text`
    font-size: 16;
    padding-left: 12px;
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
    padding: 10px;
    flex-direction: row;
`;

export const MovieInfoWrapper = styled.View`
    justify-content: space-evenly;
`;

export const BasicInfo = styled.View`
    max-width: 85%; 
`;
export const OtherInfo = styled.View``;
