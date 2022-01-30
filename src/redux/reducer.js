import actions from './actions';

export const initialState = {
  popularMovies: [],
  trendingMovies: [],
  isLoadingPopularMovies: true,
  isLoadingTrendingMovies: true,
};

const moviesReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case actions.TYPES.POPULAR_MOVIES_REQUEST: {
      return {
        ...state,
        isLoadingPopularMovies: true
      }
    }
    case actions.TYPES.POPULAR_MOVIES_REQUEST_SUCESS: {
      return {
        ...state,
        isLoadingPopularMovies: false,
        popularMovies: [...state.popularMovies ,...payload.results]
      }
    }
    case actions.TYPES.POPULAR_MOVIES_REQUEST_FALURE: {
      return {
        ...state,
        isLoadingPopularMovies: false
      }
    }

    case actions.TYPES.TRENDING_MOVIES_REQUEST: {
      return {
        ...state,
        isLoadingTrendingMovies: true
      }
    }
    case actions.TYPES.TRENDING_MOVIES_REQUEST_SUCESS: {
      return {
        ...state,
        isLoadingTrendingMovies: false,
        trendingMovies: payload.results
      }
    }
    case actions.TYPES.TRENDING_MOVIES_REQUEST_FALURE: {
      return {
        ...state,
        isLoadingTrendingMovies: false
      }
    }

    default:
      return state;
  }
};

export default moviesReducer;
