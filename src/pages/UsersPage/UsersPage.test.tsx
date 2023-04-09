import { render, screen } from '@testing-library/react';
import UsersPage from './UsersPage';

describe('UsersPage', () => {
  it('render UsersPage elements', () => {
    render(<UsersPage />);
    expect(screen.getByText(/Add new user/i)).toBeInTheDocument();
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });
});
