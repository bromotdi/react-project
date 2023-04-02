import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import InputComponent from './search';
import React from 'react';

describe('cards test', () => {
    test('Should show title', () => {
        render(<InputComponent />);
        expect(screen.getByText(/Input Here :/i)).toBeDefined();
    });
});
