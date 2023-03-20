import { render, screen } from '@testing-library/react';
import { PersonCard } from './PersonCard';

const testCard = {
  id: 1,
  name: 'Eren Yeager',
  status: 'Deceased',
  species: 'Human, Intelligent Titan',
  gender: 'Male',
  location: 'Wall Rose',
  image:
    'https://static.wikia.nocookie.net/shingekinokyojin/images/a/a1/Eren_Jaeger_%28Anime%29_character_image.png',
};

describe('PersonCard', () => {
  it('render elements in PersonCard', () => {
    render(<PersonCard person={testCard} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(testCard.name)).toBeInTheDocument();
    expect(screen.getByText(testCard.species)).toBeInTheDocument();
    expect(screen.getByText(testCard.status)).toBeInTheDocument();
    expect(screen.getByText(testCard.gender)).toBeInTheDocument();
    expect(screen.getByText(testCard.location)).toBeInTheDocument();
  });
});
