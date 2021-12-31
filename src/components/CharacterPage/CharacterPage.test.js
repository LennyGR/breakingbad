import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CharacterPage from '.';
import i18n from '../../i18n/i18nForTests';
import { createMemoryHistory } from 'history';
import { Router } from "react-router-dom";

jest.mock('react-redux', () => ({
   ...jest.requireActual('react-redux'),
   useDispatch: () => jest.fn(),
   useSelector: () => jest.fn()
}));

jest.mock('react-query', () => ({
   ...jest.requireActual('react-query'),
   useQuery: () => jest.fn()
}));

describe('CharacterPage', () => {
    beforeEach(() => {
        i18n.init();
    });

    test('renders content', () => {
        render(<CharacterPage/>);
    });

    test('renders content first profile', () => {
        const history = createMemoryHistory({ initialEntries: ['/1'] });
        render(
          <Router location={history.location} navigator={history}>
            <CharacterPage/>
          </Router>
        );
    });
});