import { render, screen } from '@testing-library/react';
import {beforeEach,describe, expect, test} from "vitest";
import NotFound from "../NotFound/NotFound";
import React from "react";

describe('notfound test', () => {
beforeEach(() => {
    render(<NotFound />);
});

test('should show title all the time', () => {
    expect(screen.getByText(/404/i)).toBeDefined();
});
});
