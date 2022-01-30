import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';

export const StyledInput = styled.TextInput`
  border-radius: 8px;
  border: #031d38;
  padding: 12px;
  margin-bottom: 8px;
  margin-top: 8px;
  line-height: 20px;
  background-color: white;
`;


export const Container = styled.View`
    flex:1;
`;

export const InputHeader = styled.View`
    height: ${({insets})=> insets.top + 130};
    width: 100%;
    padding: 20px;
    background: #031d38;
    justify-content: center;
`;

export const ListView = styled.View`
    flex:1;
    background-color: #eee3d6;
`;
export const TitleText = styled.Text`
    color: white;
    margin-vertical: 18px;
    font-weight: bold;
    align-self: center;
`;

export const EmptyPlaceholder = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
`; 

export const BackIcon = styled(SvgXml)`
  height: 24px;
  width: 24px;
`;

export const BackIconWrapper = styled.TouchableOpacity`
  position: absolute;
  margin-left: 20px;
  top: ${({insets})=> insets.top -2 };
`;
