import React from 'react';
import { render, screen } from '@testing-library/react';
import i18n from '../../i18n/i18nForTests';
import LanguageSwitcher from '.';

describe('LanguageSwitcher', () => {
    beforeEach(() => {
        i18n.init();
    });

    test('renders content', () => {
        render(<LanguageSwitcher />);
        expect(screen.getByRole('group')).toBeInTheDocument();
        expect(screen.getAllByRole('button')).toHaveLength(2);
        expect(screen.getByLabelText('en')).toBeInTheDocument();
        expect(screen.getByLabelText('es')).toBeInTheDocument();
    });
});