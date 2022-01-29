import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollableWithBannerLayout } from '../../components/scrollable-with-banner-layout/scrollable-with-banner-layout';
import { fetchPopularMovies, fetchTrendingMovies } from '../../redux/actions';
import { ListCarousal } from '../../components/list-carousel/list-carousel';
import { bannerImageSrc } from '../../utils';

import { getIsLoadingPopularMovies, getIsLoadingTrendingrMovies, getPopularMovies, getTrendingMovies } from '../../redux/selector';

export const HomeScreen = () => {
  // navigation 
  const navigation = useNavigation();
  // to dispatch actions
  const dispatch = useDispatch();
  // selector to get the state values from redux
  const popularMovies = useSelector(getPopularMovies);
  const trendingMovies = useSelector(getTrendingMovies);
  const isLoadingPopularMovies = useSelector(getIsLoadingPopularMovies);
  const isLoadingTrendingMovies = useSelector(getIsLoadingTrendingrMovies);

  // API calling in hook
  useEffect(() => {
    dispatch(fetchPopularMovies(1));
    dispatch(fetchTrendingMovies(1));
  }, []);

  // navigation functions
  const navigateToPopularMovies = () => navigation.navigate('MoviesTab', { screen: 'Popular' });
  const navigateToTrendingMovies = () => navigation.navigate('MoviesTab', { screen: 'Trending' });

  return (
    (isLoadingPopularMovies || isLoadingTrendingMovies) ? (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    ) : (
      <ScrollableWithBannerLayout
        showBackButton={false}
        title='Best Movies to Watch'
        bannerImageSrc={bannerImageSrc}
      >
        <ListCarousal
          movies={popularMovies?.slice(0, 8)}
          headerTitle='Popular Movies'
          onPressViewAll={navigateToPopularMovies}
        />
        <ListCarousal
          movies={trendingMovies?.slice(0, 8)}
          headerTitle='Trending Movies'
          onPressViewAll={navigateToTrendingMovies}
        />
      </ScrollableWithBannerLayout>
    ))
};
