import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import InputComponent from '../../components/search/search';

describe('InputComponent', () => {
    test('should update localStorage when input value is changed', () => {
        const { getByPlaceholderText } = render(<InputComponent />);
        const inputField = getByPlaceholderText('your name');
        fireEvent.change(inputField, { target: { value: 'Daria' } });
        expect(localStorage.getItem('input')).toBe('Daria');
    });
});
