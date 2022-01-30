import React, { useEffect, useState, useCallback } from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import debounce from 'lodash/debounce';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


import { ListComponent } from '../movies-list/components/list';
import { backIconSvg } from '../../utils';
import { api_key } from '../../config';

import {
  Container,
  StyledInput,
  ListView,
  TitleText,
  InputHeader,
  EmptyPlaceholder,
  BackIcon,
  BackIconWrapper,
} from './styled';


export const SearchScreen = () => {

  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState('');
  const [listOfMovies, setListOfMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const search = useCallback(
    debounce(async (searchQuery) => {
      if (searchQuery) {
        try {
          setIsLoading(true);
          const respone = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&query=${searchQuery}`);
          setListOfMovies(respone?.data?.results);
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false)
          console.log(error);
        }

      } else {
        setListOfMovies([]);
      }
    }, 500),
    [],
  );

  useEffect(() => {
    search(query);
  }, [query]);

  return (
    <Container>
      <InputHeader insets={insets}>
        <BackIconWrapper onPress={navigation.goBack} insets={insets}>
          <BackIcon
            fill={'white'}
            xml={backIconSvg}
          />
        </BackIconWrapper>

        <TitleText>
          Find Your Favorite Movies
        </TitleText>

        <StyledInput
          onChangeText={(text) => setQuery(text)}
          value={query}
          placeholder="Search movies here..."

        />
      </InputHeader>
      <ListView>
        {
          listOfMovies?.length > 0 ? (
            <ListComponent
              isLoading={isLoading}
              data={listOfMovies}
            />
          ) : (
            <EmptyPlaceholder>
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#031d38' }} >
                Your search results will appear here...
              </Text>
            </EmptyPlaceholder>
          )
        }
      </ListView>
    </Container>
  )
};
