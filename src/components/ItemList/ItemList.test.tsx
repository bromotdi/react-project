import { render, screen } from '@testing-library/react';
import { ItemList } from './ItemList';

const testCards = [
  {
    id: 1,
    name: 'Eren Yeager',
    status: 'Deceased',
    species: 'Human, Intelligent Titan',
    gender: 'Male',
    location: 'Wall Rose',
    image:
      'https://static.wikia.nocookie.net/shingekinokyojin/images/a/a1/Eren_Jaeger_%28Anime%29_character_image.png',
  },
  {
    id: 2,
    name: 'Mikasa Ackermann',
    status: 'Alive',
    species: 'Human',
    gender: 'Female',
    location: 'Shiganshina District',
    image:
      'https://static.wikia.nocookie.net/shingekinokyojin/images/4/4f/Mikasa_Ackermann_%28Anime%29_character_image.png',
  },
  {
    id: 3,
    name: 'Armin Arlelt',
    status: 'Alive',
    species: 'Human, Intelligent Titan',
    gender: 'Male',
    location: 'Shiganshina District',
    image:
      'https://static.wikia.nocookie.net/shingekinokyojin/images/9/93/Armin_Arlelt_%28Anime%29_character_image.png',
  },
];
describe('ItemList', () => {
  it('render elements in ItemList', () => {
    const { container } = render(<ItemList persons={testCards} />);

    expect(screen.getByText(/Persons/i)).toBeInTheDocument();
    expect(container.getElementsByClassName('person').length).toBe(testCards.length);
  });
});
