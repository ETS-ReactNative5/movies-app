import React from 'react';
import { render } from '@testing-library/react-native';
import { TEST_IDS } from '../../src/utils';

import { ReviewCard } from '../../src/screens/detail/component/review';

const props = {
    "content": "As I'm writing this review",
    "author": "Cat Ellington",
    "author_details": {
        "name": "Cat",
        "username": "CatEllington",
        "avatar_path": "/uCmwgSbJAcHqNwSvQvTv2dB95tx.jpg",
        "rating": 8
    },
    "created_at": "2017-02-13T22:23:01.268Z",
};

describe('Review Card Component of Detail Screen', () => {

    it('should match the Review Card component snapshot', () => {
        const { toJSON } = render(
            <ReviewCard
                review={props}
            />
        );
        expect(toJSON()).toMatchSnapshot();
    });

    it('should render name of reviewee correctly', async () => {
        const { getByTestId } = render(
            <ReviewCard
                review={props}
            />);
        expect(getByTestId(TEST_IDS.REVIEW_CARD_REVIEWEE_NAME).props.children).toBe('A review by Cat');
    });

    it('should render movie rating correctly', async () => {
        const { getByTestId } = render(
            <ReviewCard
                review={props}
            />);
        expect(getByTestId(TEST_IDS.REVIEW_CARD_AVERAGE_SCORE).props.children).toBe(8);
    });

    it('should render movie comment correctly', async () => {
        const { getByTestId } = render(
            <ReviewCard
                review={props}
            />);
        expect(getByTestId(TEST_IDS.REVIEW_CARD_CONTENT).props.children).toBe(`As I'm writing this review`);
    });

    it('should render movie comment date correctly', async () => {
        const { getByTestId } = render(
            <ReviewCard
                review={props}
            />);
        expect(getByTestId(TEST_IDS.REVIEW_CARD_DATE).props.children).toBe(`Written on Tuesday, February 14, 2017`);
    });

});
