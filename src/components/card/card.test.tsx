import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './card';
import React from 'react';
import {Data} from '../type/types';

describe('card test', () => {
  test('Should show title', () => {
    render(<Card product={Data[0]} />);
    expect(screen.getByText(/Eren/)).toBeDefined();
  });
});
