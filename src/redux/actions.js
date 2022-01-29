import axios from 'axios';

const TYPES = {
    POPULAR_MOVIES_REQUEST: 'POPULAR_MOVIES_REQUEST',
    POPULAR_MOVIES_REQUEST_SUCESS: 'POPULAR_MOVIES_REQUEST_SUCESS',
    POPULAR_MOVIES_REQUEST_FALURE: 'POPULAR_MOVIES_REQUEST_FALURE',
    TRENDING_MOVIES_REQUEST: 'TRENDING_MOVIES_REQUEST',
    TRENDING_MOVIES_REQUEST_SUCESS: 'TRENDING_MOVIES_REQUEST_SUCESS',
    TRENDING_MOVIES_REQUEST_FALURE: 'TRENDING_MOVIES_REQUEST_FALURE',
};

const fetchPopularMovies = (options) => async (dispatch) => {
    dispatch({ type: TYPES.POPULAR_MOVIES_REQUEST });
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=8c793d948d52df975cb1f74b7c39c00f&language=en-US&page=${options}`);
        dispatch({ type: TYPES.POPULAR_MOVIES_REQUEST_SUCESS, payload: { results: response?.data?.results } });
        return response?.data?.results;
    } catch (error) {
        dispatch({ type: TYPES.POPULAR_MOVIES_REQUEST_FALURE, payload: error });
        return error;
    }
}

const fetchTrendingMovies = (options) => async (dispatch) => {
    dispatch({ type: TYPES.TRENDING_MOVIES_REQUEST });
    try {
        const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=8c793d948d52df975cb1f74b7c39c00f');
        dispatch({ type: TYPES.TRENDING_MOVIES_REQUEST_SUCESS, payload: { results: response?.data?.results } });
        return response;
    } catch (error) {
        dispatch({ type: TYPES.TRENDING_MOVIES_REQUEST_FALURE, payload: error });
        return error;
    }
}

export {
    TYPES,
    fetchPopularMovies,
    fetchTrendingMovies,
};

export default {
    TYPES,
    fetchPopularMovies,
    fetchTrendingMovies,
};
