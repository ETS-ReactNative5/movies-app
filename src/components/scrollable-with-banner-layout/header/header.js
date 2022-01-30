import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { backIconSvg } from '../../../utils';

import { StyledWrapper, StyledIcon, Title } from './styled';
import { defaultProps, propTypes } from './props';



export const LayoutHeader =
  ({
    title,
    headerTitleStyles,
    showBackButton,
  }) => {

    const navigation = useNavigation();
    const insets = useSafeAreaInsets();

    return (
      <StyledWrapper insets={insets} style={headerTitleStyles}>
        {showBackButton && (
          <TouchableOpacity style={{ zIndex: 11 }} onPress={navigation.goBack} >
            <StyledIcon
              fill={'black'}
              xml={backIconSvg}
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
