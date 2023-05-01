import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/testUtils';
import Layout from './Layout';

describe('Layout', (): void => {
  it('Should render navigation', (): void => {
    renderWithProviders(<Layout />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('Should render main page link', (): void => {
    renderWithProviders(<Layout />);
    expect(screen.getByText(/main/i)).toBeInTheDocument();
  });

  it('Should render about page link', (): void => {
    renderWithProviders(<Layout />);
    expect(screen.getByText(/about us/i)).toBeInTheDocument();
  });
});
