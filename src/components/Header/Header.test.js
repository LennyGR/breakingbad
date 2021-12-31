import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import i18n from '../../i18n/i18nForTests';
import Header from '.';
import { createMemoryHistory } from 'history';
import { BrowserRouter, Router } from "react-router-dom";

//We are using Link in this component
const renderWithRouter = (ui, {route = '/'} = {}) => {
    window.history.pushState({}, 'Test page', route)
    return render(ui, {wrapper: BrowserRouter})
}

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockHistoryPush
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

    test('Goes from Home to popular', () => {
      const history = createMemoryHistory({ initialEntries: ['/'] });
      render(
        <Router location={history.location} navigator={history}>
          <Header />
        </Router>
      );

      expect(history.location.pathname).toBe('/');
      fireEvent.click(screen.getByText('Popular'));
      expect(history.location.pathname).toBe('/Popular');
    });

    test('Goes from Popular to Home', () => {
      const history = createMemoryHistory({ initialEntries: ['/Popular'] });
      render(
        <Router location={history.location} navigator={history}>
          <Header />
        </Router>
      );

      expect(history.location.pathname).toBe('/Popular');
      fireEvent.click(screen.getByAltText('Breaking Bad Home'));
      expect(history.location.pathname).toBe('/');
    });
});