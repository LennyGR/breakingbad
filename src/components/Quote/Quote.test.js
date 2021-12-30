import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/react';
import Quote from '.';
import i18n from '../../i18n/i18nForTests';

jest.mock('react-redux', () => ({
   ...jest.requireActual('react-redux'),
   useSelector: () => jest.fn()
}));

jest.mock('react-query', () => ({
   ...jest.requireActual('react-query'),
   useQuery: () => jest.fn(),
   useRandomQuote: () => jest.fn()
}));


describe('Quote', () => {
    const name = 'That Name';

    beforeEach(() => {
        i18n.init();
    });

    test('renders content', async() => {
        render(<Quote name={name} />);
        const finished = await screen.findByTestId('quote_container');
        expect(finished).toBeInTheDocument();
        expect(screen.getByText(name)).toBeInTheDocument();
    });
});