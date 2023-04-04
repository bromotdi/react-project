import { render, screen } from '@testing-library/react';
import React from 'react';
import {beforeEach, describe, expect, test} from "vitest";
import About from "../About/about";

describe('about test', () => {
    beforeEach(() => {
        render(<About />);
    });

    test('should show title all the time', () => {
        expect(screen.getByText(/History/)).toBeDefined();
    });
});
