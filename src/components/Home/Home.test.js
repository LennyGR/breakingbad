import React from 'react';
import { render, screen } from '@testing-library/react';
import i18n from '../../i18n/i18nForTests';
import Home from '.';
import { BrowserRouter } from "react-router-dom";

// const renderWithRouter = (ui, {route = '/'} = {}) => {
//     window.history.pushState({}, 'Home page', route)
//     return render(ui, {wrapper: BrowserRouter})
// }

jest.mock('react-query', () => ({
   ...jest.requireActual('react-query'),
   useQuery: () => jest.fn()
}));

describe('Home', () => {
    beforeEach(() => {
        i18n.init();
    });

    test('could render', async() => {
        //renderWithRouter(<Home />);

        render(<Home />);
        const finished = await screen.findByTestId('home_container');
        expect(finished).toBeInTheDocument();
    });
});