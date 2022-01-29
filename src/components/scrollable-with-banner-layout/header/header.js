import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyledWrapper, StyledIcon, Title } from './styled';

import { useSafeAreaInsets } from 'react-native-safe-area-context';


import { defaultProps, propTypes } from './props';
import { useNavigation } from '@react-navigation/native';

export const LayoutHeader = ({ title, headerTitleStyles, showBackButton }) => {

  const navigation = useNavigation();

  const insets = useSafeAreaInsets();

  return (
    <StyledWrapper insets={insets} style={headerTitleStyles}>
      {showBackButton && (
        <TouchableOpacity style={{ zIndex: 11 }} onPress={navigation.goBack} >
          <StyledIcon
            fill={'black'}
            xml={`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 12L2.79289 11.2929C2.40237 11.6834 2.40237 12.3166 2.79289 12.7071L3.5 12ZM10.2071 17.2929L4.20711 11.2929L2.79289 12.7071L8.79289 18.7071L10.2071 17.2929ZM4.20711 12.7071L10.2071 6.70711L8.79289 5.29289L2.79289 11.2929L4.20711 12.7071ZM3.5 13L20.5 13L20.5 11L3.5 11L3.5 13Z" />
        </svg>`}
          />
        </TouchableOpacity>

      )}
      <Title showBackButton={showBackButton} >
        {title}
      </Title>
    </StyledWrapper>

  );
};

LayoutHeader.propTypes = propTypes;
LayoutHeader.defaultProps = defaultProps;
