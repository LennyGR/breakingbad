import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/react';
import Profile from '.';
import i18n from '../../i18n/i18nForTests';

jest.mock('react-redux', () => ({
   ...jest.requireActual('react-redux'),
   useSelector: () => jest.fn()
}));

jest.mock('react-query', () => ({
   ...jest.requireActual('react-query'),
   useQuery: () => jest.fn()
}));


describe('Profile', () => {
    const profile = {
        chard_id: 4,
        name: 'NoName',
        img: 'img',
        birthday: 'birthday',
        occupation: ['nothing','everything'],
        status: 'alive',
        nickname: 'nickname',
        appearance: [1,2,3],
        portrayed: 'Bryan Cranston',
        category: 'Breaking Bad'
    }

    beforeEach(() => {
        i18n.init();
    });

    test('renders content', async() => {
        render(<Profile profile={profile} />);

        const finished = await screen.findByTestId('profile_container');
        expect(finished).toBeInTheDocument();
        expect(screen.getAllByText(profile.name)).not.toEqual([]);
        expect(screen.getByText(profile.birthday)).toBeInTheDocument();
        expect(screen.getByText(profile.occupation.join(','))).toBeInTheDocument();
        expect(screen.getByText(profile.status)).toBeInTheDocument();
        expect(screen.getByText(profile.nickname)).toBeInTheDocument();
        expect(screen.getByText(profile.appearance.join(','))).toBeInTheDocument();
        expect(screen.getByText(profile.portrayed)).toBeInTheDocument();
        expect(screen.getByText(profile.category)).toBeInTheDocument();
    });
});