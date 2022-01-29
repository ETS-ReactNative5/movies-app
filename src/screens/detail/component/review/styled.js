import FastImage from "react-native-fast-image";
import styled from "styled-components/native"


export const Container = styled.View`
    flex:1;
    flex-direction: row;
    align-items: center;
    padding-vertical: 20px;
    padding-right: 12px;
`;

export const ImageWrapper = styled.View`
    margin: 8px;
    align-self: flex-start;
`;

export const Image = styled(FastImage)`
    resize-mode: cover;
    width: 80px;
    height: 80px;  
    border-radius: 100px;
`;

export const MovieReviewWrapper = styled.View`
    flex:1;
`;
export const UserName = styled.Text`
    font-weight: bold;
    width: 75%;
`;
export const UserInfo = styled.View`
`;
export const AverageScore = styled.View`
    border-radius: 5px;
    background: black;
    opacity: 0.6;
    padding-horizontal: 18px
    padding-vertical: 6px;
`;
export const ReviewData = styled.Text`
    margin-vertical: 5px;
`;

export const ReviewText = styled.Text``;

export const StyledWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
