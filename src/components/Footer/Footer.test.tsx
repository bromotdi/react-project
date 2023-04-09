import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('render link elements', () => {
    render(<Footer />);
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });
});
