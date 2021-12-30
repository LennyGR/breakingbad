import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/react';
import ErrorBoundary from '.';
import i18n from '../../i18n/i18nForTests';

describe('ErrorBoundary', () => {
    const component = "TestJest";

    beforeEach(() => {
        i18n.init();
    });

    test('renders content ok', () => {
        render(<ErrorBoundary component={component}>
            <div>Test</div>
        </ErrorBoundary>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('renders content error', () => {
        const ThrownError = () => {
            throw new Error('Error in unit test');
        }

        render(<ErrorBoundary component={component}>
            <ThrownError />
        </ErrorBoundary>);

        expect(screen.getByText(/this is an error alert/i)).toBeInTheDocument();
    });
});