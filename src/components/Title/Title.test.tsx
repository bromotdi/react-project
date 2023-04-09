import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Title', () => {
  it('render Title component', () => {
    render(<Title text="This is test Title" />);
    expect(screen.getByText('This is test Title')).toBeInTheDocument;
  });
});
