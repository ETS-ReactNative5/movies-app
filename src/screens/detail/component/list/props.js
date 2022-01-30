import { array, string } from 'prop-types';

export const propTypes = {
    casts: array.isRequired,
    headerTitle: string.isRequired,
};

export const defaultProps = {};
