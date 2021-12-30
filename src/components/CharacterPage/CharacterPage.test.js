import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import CharacterPage from '.';
import i18n from '../../i18n/i18nForTests';

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
});