

import { number, string } from 'prop-types';

export const propTypes = {
    language: string.isRequired,
    title: string.isRequired,
    overview: string.isRequired,
    imgSrc: string.isRequired,
    popularity: number.isRequired,
    releaseDate: string.isRequired,
    voteAvg: string.isRequired,
    genres: string.isRequired,
};

export const defaultProps = {};
