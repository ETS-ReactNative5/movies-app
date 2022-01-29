import React from 'react';
import { ListCarousalItem } from '../../src/components/list-carousel/list-carousel-item/list-carousel-item';
import { render, fireEvent } from '@testing-library/react-native';


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

describe('Divider Component', () => {

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
        expect(getByTestId('title-wrapper').props.children).toBe('Title');
    });

    it('should render item title correctly', async () => {
        const { getByTestId } = render(
            <ListCarousalItem
                {...props}
            />);
        expect(getByTestId('rating-container').props.children).toBe(1234);
    });

    it('should navigate to detail screen', () => {
        const { getByTestId } = render(
            <ListCarousalItem
                {...props}
            />);
        fireEvent(getByTestId('container-wrapper'), 'press');
        expect(mockedNavigate).toHaveBeenCalledWith('Detail', { movieId: 548263 });
    });

});
