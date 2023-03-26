import { render } from '@testing-library/react';
import { ItemList } from './ItemList';

const testPersons = [
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

const testUsers = [
  {
    id: 1,
    name: 'testName',
    surname: 'testSurname',
    birthday: '07.04.2022',
    country: 'Belarus',
    gender: 'Female',
    avatar: new File(['(⌐□_□)'], 'test.jpg', { type: 'image/jpeg' }),
  },
  {
    id: 2,
    name: 'testName',
    surname: 'testSurname',
    birthday: '07.04.2022',
    country: 'Belarus',
    gender: 'Female',
    avatar: new File(['(⌐□_□)'], 'test.jpg', { type: 'image/jpeg' }),
  },
];

describe('ItemList', () => {
  it('render PersonCards in ItemList', () => {
    const { container } = render(<ItemList persons={testPersons} />);
    expect(container.getElementsByClassName('person').length).toBe(testPersons.length);
  });

  it('render UserCards in ItemList', () => {
    global.URL.createObjectURL = jest.fn();
    const { container } = render(<ItemList users={testUsers} />);
    expect(container.getElementsByClassName('user').length).toBe(testUsers.length);
  });
});
