import styled from "styled-components/native";
import { SvgXml } from 'react-native-svg';
import Animated from "react-native-reanimated";

export const StyledWrapper = styled(Animated.View)`
  position: absolute;
  z-index: 5;
  top: 0;
  width: 100%;
  height: ${({ insets }) => insets.top + 50}px;
  background: white;
  flex-direction: row;
  padding-top:${({ insets }) => insets.top}px;
  align-items: center;
  justify-content: space-between;
`;

export const StyledIcon = styled(SvgXml)`
  height: 30px;
  width: 30px;
  margin-left:6px;
`;

export const Title = styled.Text`
    flex:1;
    margin-left: ${({ showBackButton }) => showBackButton ? -30 : 0}px;
    text-align: center;
`;