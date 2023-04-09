import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('render AboutPage elements', () => {
    const { container } = render(<AboutPage />);
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(container.querySelectorAll('p').length).toBe(3);
  });
});
