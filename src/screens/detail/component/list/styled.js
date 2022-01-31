import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const CarouselListWrapper = styled.View``;

export const CarouselListHeader =  styled.Text`
    font-weight: bold;
    font-size: 20px;
`;

export const HeaderContainer= styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
    align-items: center;
`;

export const ViewAll =  styled.Text`
    font-size: 12px;
    color: #176fb9;
    text-decoration-line: underline;
`;

export const StyledImage = styled(FastImage)`
    resize-mode: cover;
    width: 130px;
    height: 150px;
    border-radius: 50px;
    border-width: 5px;
`;

export const Character = styled.Text`
    margin-bottom: 5px;
    text-align: center;
    margin-top: 5px;
    color: black;
`;

export const TextWrapper = styled.View``;

export const Name = styled.Text`
    margin-top: 6px;
`;

export const StyledWrapper = styled.View` 
    align-items: center;
    padding: 10px;
    width: 150px;
`;
