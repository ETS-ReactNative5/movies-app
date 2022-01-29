import { string, number } from 'prop-types';

export const propTypes = {
    imageSrc: string,
    title: string,
    rating: number
};

export const defaultProps = {
    imageSrc: '',
    title: '',
    rating: 0
};
