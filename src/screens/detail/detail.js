import React, { useState, useEffect } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { ScrollableWithBannerLayout } from '../../components/scrollable-with-banner-layout/scrollable-with-banner-layout';
import { Header } from './component/header';
import { CastCarousel } from './component/list/list';
import { ListCarousal } from '../../components/list-carousel/list-carousel';
import { ReviewCard } from './component/review';

import {
  Heading,
  ReviewsContainer,
} from './styled';
import { imagePrefixUrl } from '../../utils';
import { api_key } from '../../config';

export const MovieDetailScreen = ({ route }) => {

  const [isLoading, setIsLoading] = useState(true);

  const [movieData, setMovieData] = useState([]);
  const [castData, setCastData] = useState([]);
  const [recommendations, setRecommendations] = useState([])
  const [reviews, setReviews] = useState([])
  const movieId = route?.params?.movieId;

  useEffect(() => {
    (async () => {
      try {
        if (!movieData?.length) {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&language=en-US`);
          setMovieData(response?.data);
        }
        if (!castData?.length) {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key}&language=en-US`);
          setCastData(response?.data?.cast?.slice(0, 10));
        }
        if (!recommendations?.length) {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${api_key}&language=en-US`);
          setRecommendations(response?.data?.results?.slice(0, 10));
        }
        if (!reviews?.length) {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${api_key}&language=en-US`);
          setReviews(response?.data?.results?.slice(0, 5));
        }
        setIsLoading(false);

      } catch (e) {
        setIsLoading(false);
        console.error(e);
      }
    })();
  }, []);

  const {
    original_language,
    original_title,
    overview,
    poster_path,
    popularity,
    release_date,
    vote_average,
    genres,
  } = movieData;


  return (
    isLoading ? (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    )
      : (
        <ScrollableWithBannerLayout
          title={original_title}
          bannerImageSrc={imagePrefixUrl+poster_path}
        >
          <Header
            language={original_language}
            title={original_title}
            overview={overview}
            imgSrc={poster_path}
            popularity={popularity}
            releaseDate={release_date}
            voteAvg={vote_average}
            genres={genres}
          />

          {!!castData?.length && <CastCarousel casts={castData} headerTitle='Cast and Crew' />}
          {!!recommendations?.length && <ListCarousal shouldShowViewAll={false} movies={recommendations} headerTitle='Recommendations' />}

          {!!reviews?.length && (
            <ReviewsContainer>
              <Heading>
                Reviews
              </Heading>

              <FlatList
                data={reviews}
                keyboardShouldPersistTaps='handled'
                keyExtractor={(item) => `list-carousel-${item.id}`}
                listKey={Math.random().toString()}
                renderItem={({ item }) => (
                  <ReviewCard review={item} />
                )}
              />

            </ReviewsContainer>

          )}
        </ScrollableWithBannerLayout>
      )
  )
};
