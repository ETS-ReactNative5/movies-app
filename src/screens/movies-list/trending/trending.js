import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTrendingMovies } from '../../../redux/actions';
import { getIsLoadingTrendingrMovies, getTrendingMovies } from '../../../redux/selector';
import { ListComponent } from '../components/list/list';
import { ScrollableWithBannerLayout } from '../../../components/scrollable-with-banner-layout/scrollable-with-banner-layout';
import { imagePrefixUrl } from '../../../utils';


export const TrendingMovies = () => {

  const isLoading = useSelector(getIsLoadingTrendingrMovies);
  const movies = useSelector(getTrendingMovies);

  const [pageNumber, setPageNumber] = useState(2);
  const dispatch = useDispatch();

  const loadMoreHandler = () => {
    if (!isLoading) {
      dispatch(fetchTrendingMovies(pageNumber));
      setPageNumber(pageNumber + 1);
    }
  }

  return (
    <ScrollableWithBannerLayout
      title={'Top Trending Movie'}
      bannerImageSrc={ imagePrefixUrl + movies[0]?.poster_path}
    >
      <ListComponent
        isLoading={isLoading && pageNumber === 1}
        data={movies}
        loadMoreHandler={loadMoreHandler}
      />
    </ScrollableWithBannerLayout>
  )
};