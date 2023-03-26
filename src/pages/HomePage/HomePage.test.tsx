import { render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('render HomePage elements', () => {
    render(<HomePage />);
    expect(screen.getByText(/Persons/i)).toBeInTheDocument();
  });
});
