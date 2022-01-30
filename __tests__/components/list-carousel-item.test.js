import React from 'react';
import { ListCarousalItem } from '../../src/components/list-carousel/list-carousel-item/list-carousel-item';
import { render, fireEvent } from '@testing-library/react-native';

import { NAVIGATION_ROUTES, TEST_IDS } from '../../src/utils'; 

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({
        push: mockedNavigate,
    }),
    useRoute: jest.fn,
}));

const props = {
    imageSrc: 'image',
    rating: 1234,
    title: 'Title',
    releaseDate: '20 Nov, 2015',
    id: 548263
};

describe('Testing Common Component', () => {

    it('should match the List Carousel Item component snapshot', () => {
        const { toJSON } = render(
            <ListCarousalItem
                {...props}
            />
        );
        expect(toJSON()).toMatchSnapshot();
    });

    it('should render item title correctly', async () => {
        const { getByTestId } = render(
            <ListCarousalItem
                {...props}
            />);
        expect(getByTestId(TEST_IDS.CAROUSEL_ITEM_TITLE_WRAPPER).props.children).toBe('Title');
    });

    it('should render item rating correctly', async () => {
        const { getByTestId } = render(
            <ListCarousalItem
                {...props}
            />);
        expect(getByTestId(TEST_IDS.CAROUSEL_ITEM_RATING_CONTAINER).props.children).toBe(1234);
    });

    it('should navigate to detail screen', () => {
        const { getByTestId } = render(
            <ListCarousalItem
                {...props}
            />);
        fireEvent(getByTestId(TEST_IDS.CAROUSEL_ITEM_CONTAINER_WRAPPER), 'press');
        expect(mockedNavigate).toHaveBeenCalledWith(NAVIGATION_ROUTES.DETAIL, { movieId: 548263 });
    });

});
