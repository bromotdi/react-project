import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/testUtils';
import SearchBar from './SearchBar';
import userEvent from '@testing-library/user-event';
import { LOCAL_STORAGE_KEYS } from '../../constants';

describe('SearchBar', (): void => {
  it('Should render search bar', (): void => {
    renderWithProviders(<SearchBar updateMainPageState={jest.fn()} />);
    expect(screen.getByPlaceholderText(/search by name../i)).toBeInTheDocument();
  });

  it('Should have no value on first load', (): void => {
    renderWithProviders(<SearchBar updateMainPageState={jest.fn()} />);
    expect(screen.getByPlaceholderText(/search by name../i)).not.toHaveValue();
  });

  it('Should have value on its change', async (): Promise<void> => {
    renderWithProviders(<SearchBar updateMainPageState={jest.fn()} />);
    const user = userEvent.setup();
    await user.type(screen.getByPlaceholderText(/search by name../i), 'test value');
    expect(screen.getByPlaceholderText(/search by name../i)).toHaveValue('test value');
  });

  it('Should add value to local storage on unmount', async (): Promise<void> => {
    localStorage.clear();
    renderWithProviders(<SearchBar updateMainPageState={jest.fn()} />);
    const user = userEvent.setup();
    await user.type(screen.getByPlaceholderText(/search by name../i), 'new test value');
    const { unmount } = renderWithProviders(<SearchBar updateMainPageState={jest.fn()} />);
    unmount();
    expect(localStorage.getItem(LOCAL_STORAGE_KEYS.searchValue)).toEqual('new test value');
  });
});
