import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import i18n from '../../i18n/i18nForTests';
import Header from '.';

import { BrowserRouter } from "react-router-dom";
import { MemoryRouter } from 'react-router-dom';

//We are using Link in this component
const renderWithRouter = (ui, {route = '/'} = {}) => {
    window.history.pushState({}, 'Test page', route)
  
    return render(ui, {wrapper: BrowserRouter})
}

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Header', () => {
    beforeEach(() => {
        i18n.init();
    });

    test('renders content', () => {
        renderWithRouter(<Header />);

        const logo = screen.getByAltText('Breaking Bad Home');
        expect(logo).toHaveAttribute('src');
        expect(screen.getByText('Popular')).toBeInTheDocument();
        expect(screen.getByRole('group')).toBeInTheDocument();
    });
});