import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './header';
import React from 'react';

describe('header test', () => {
    test('Should show title', () => {
        render(<Header />);
        expect(screen.getByText(/Home/)).toBeDefined();
    });
});
