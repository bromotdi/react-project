import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormCards from '../../components/form/formCards';
import React from 'react';

describe('FormCards component', () => {
  const items = [
    {
      id: 1,
      inputName: 'Daria Bromot',
      inputDate: '16/12/2000',
      inputCountry: 'Ukraine',
      inputYear: true,
      inputGender: true,
      inputImg: 'https://static.wikia.nocookie.net/shingekinokyojin/images/4/4f/Mikasa_Ackermann_%28Anime%29_character_image.png'
    },
  ];

  test('renders the item name', () => {
    render(<FormCards items={items} />);
    const itemName = screen.getByText(/Name : Daria Bromot/i);
    expect(itemName).toBeDefined();
  });

  test('renders the item birthday', () => {
    render(<FormCards items={items} />);
    const itemBirthday = screen.getByText(/Birthday : 16\/12\/2000/i);
    expect(itemBirthday).toBeDefined();
  });

  test('renders the testem country', () => {
    render(<FormCards items={items} />);
    const itemCountry = screen.getByText(/From : Ukraine/i);
    expect(itemCountry).toBeDefined();
  });

  test('renders the item age', () => {
    render(<FormCards items={items} />);
    const itemAge = screen.getByText(/Age : adult/i);
    expect(itemAge).toBeDefined();
  });

  test('renders the item status', () => {
    render(<FormCards items={items} />);
    const itemGender = screen.getByText(/Gender : Female/i);
    expect(itemGender).toBeDefined();
  });
});
