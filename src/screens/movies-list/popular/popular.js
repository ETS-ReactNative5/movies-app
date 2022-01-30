import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../../../redux/actions';
import { getIsLoadingPopularMovies, getPopularMovies } from '../../../redux/selector';
import { ListComponent } from '../components/list/list';
import { ScrollableWithBannerLayout } from '../../../components/scrollable-with-banner-layout/scrollable-with-banner-layout';
import { imagePrefixUrl } from '../../../utils';

export const PopularMovies = () => {

  const [pageNumber, setPageNumber] = useState(2);

  const isLoading = useSelector(getIsLoadingPopularMovies);
  const movies = useSelector(getPopularMovies);

  const dispatch = useDispatch();

  const loadMoreHandler = () => {
    if (!isLoading) {
      dispatch(fetchPopularMovies(pageNumber));
      setPageNumber(pageNumber + 1);
    }
  }

  return (
    <ScrollableWithBannerLayout
      title={'Top Rated Popular Movie'}
      bannerImageSrc={imagePrefixUrl + movies[0]?.poster_path}
    >
      <ListComponent
        isLoading={isLoading && pageNumber === 1}
        data={movies}
        loadMoreHandler={loadMoreHandler}
      />
    </ScrollableWithBannerLayout>

  )
};
