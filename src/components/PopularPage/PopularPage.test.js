import React from 'react';
import { render, screen } from '@testing-library/react';
import i18n from '../../i18n/i18nForTests';
import PopularPage from '.';

const mockedUseQuery = jest.fn();
jest.mock('react-query', () => ({
   ...jest.requireActual('react-query'),
   useQuery: () => mockedUseQuery
}));

const mockedUseDispatch = jest.fn();
const mockedUseSelector = jest.fn();
jest.mock('react-redux', () => ({
   ...jest.requireActual('react-redux'),
   useDispatch: () => mockedUseDispatch,
   useSelector: () => mockedUseSelector
}));

describe('Populars', () => {
    beforeEach(() => {
        i18n.init();
    });

    test('renders content', async() => {
        render(<PopularPage />);
        const finished = await screen.findByTestId('popular_container');
        expect(finished).toBeInTheDocument();
        expect(screen.getByText('Most visited profiles')).toBeInTheDocument();
    });
});