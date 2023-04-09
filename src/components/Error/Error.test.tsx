import { render, screen } from '@testing-library/react';
import Error from './Error';

const testError = 'This is test Error';

describe('Error', () => {
  it('render Error component', () => {
    render(<Error error={testError} />);
    expect(screen.getByText(testError)).toBeInTheDocument;
  });
});
