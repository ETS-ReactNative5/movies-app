import get from 'lodash/get';


const getIsLoadingPopularMovies = (state) => get(state, 'isLoadingPopularMovies', true);
const getIsLoadingTrendingrMovies = (state) => get(state, 'isLoadingTrendingMovies', true);
const getPopularMovies = (state) => get(state, 'popularMovies', []);
const getTrendingMovies = (state) => get(state, 'trendingMovies', []);

export {
    getIsLoadingPopularMovies,
    getIsLoadingTrendingrMovies,
    getPopularMovies,
    getTrendingMovies
};

export default {
    getIsLoadingPopularMovies,
    getIsLoadingTrendingrMovies,
    getPopularMovies,
    getTrendingMovies
};
