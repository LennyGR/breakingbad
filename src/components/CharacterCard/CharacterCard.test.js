import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import CharacterCard from '.';
import i18n from '../../i18n/i18nForTests';
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}));

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
        render(<CharacterCard item={card}/>);

        expect(screen.getByText('Nickname')).toBeInTheDocument();
        expect(screen.getByText('Name')).toBeInTheDocument();
    });
    
    test('click in profile', () => {
        render(<CharacterCard item={card}/>);

        const button = screen.getByRole('button', {ariaLabel: 'Info about'});
        userEvent.click(button);
        expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    });
});