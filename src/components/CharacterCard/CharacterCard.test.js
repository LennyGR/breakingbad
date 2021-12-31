import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import CharacterCard from '.';
import i18n from '../../i18n/i18nForTests';
import { createMemoryHistory } from 'history';
import { BrowserRouter, Router } from "react-router-dom";

const renderWithRouter = (ui, {route = '/'} = {}) => {
    window.history.pushState({}, 'Test page', route)
    return render(ui, {wrapper: BrowserRouter})
}

describe('CharacterCard', () => {
    const card = {
        img: 'img',
        name: 'Name',
        char_id: '1',
        nickname: 'Nickname'
    }

    beforeEach(() => {
        i18n.init();
    });

    test('renders content', () => {
        renderWithRouter(<CharacterCard item={card}/>);

        expect(screen.getByText('Nickname')).toBeInTheDocument();
        expect(screen.getByText('Name')).toBeInTheDocument();
    });

    test('Goes to proper profile', () => {
        const history = createMemoryHistory({ initialEntries: ['/'] });
        render(
          <Router location={history.location} navigator={history}>
            <CharacterCard item={card}/>
          </Router>
        );
  
        expect(history.location.pathname).toBe('/');
        fireEvent.click(screen.getByRole('button', {ariaLabel: 'Info about'}));
        expect(history.location.pathname).toBe(`/${card.char_id}`);
      });
});