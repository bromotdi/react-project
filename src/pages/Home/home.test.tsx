import { render, screen } from '@testing-library/react';
import {beforeEach, describe, expect, test} from "vitest";
import Home from "../Home/home";
import React from "react";

describe('home test', () => {
beforeEach(() => {
    render(<Home />);
});

test('should show title all the time', () => {
    expect(screen.getByText(/Home Page/i)).toBeDefined();
});
});
