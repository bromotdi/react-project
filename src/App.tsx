import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLayout } from './components/PageLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

import './App.module.scss';

const mock = [
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
  {
    id: 4,
    name: 'Jean Kirschtein',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    location: 'Trost District',
    image:
      'https://static.wikia.nocookie.net/shingekinokyojin/images/3/38/Jean_Kirschtein_%28Anime%29_character_image.png',
  },
  {
    id: 5,
    name: 'Annie Leonhart',
    status: 'Alive',
    species: 'Human, Intelligent Titan',
    gender: 'Female',
    location: 'Liberio',
    image:
      'https://static.wikia.nocookie.net/shingekinokyojin/images/6/66/Annie_Leonhart_%28Anime%29_character_image.png',
  },
  {
    id: 6,
    name: 'Levi Ackermann',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    location: 'Underground',
    image:
      'https://static.wikia.nocookie.net/shingekinokyojin/images/b/b1/Levi_Ackermann_%28Anime%29_character_image.png',
  },
  {
    id: 7,
    name: 'Reiner Braun',
    status: 'Alive',
    species: 'Human, Intelligent Titan',
    gender: 'Male',
    location: 'Liberio',
    image:
      'https://static.wikia.nocookie.net/shingekinokyojin/images/6/6d/Reiner_Braun_%28Anime%29_character_image.png',
  },
  {
    id: 8,
    name: 'Bertholdt Hoover',
    status: 'Deceased',
    species: 'Human, Intelligent Titan',
    gender: 'Male',
    location: 'Liberio',
    image:
      'https://static.wikia.nocookie.net/shingekinokyojin/images/5/56/Bertholdt_Hoover_%28Anime%29_character_image.png',
  },
  {
    id: 9,
    name: 'Hange Zoë',
    status: 'Deceased',
    species: 'Human',
    gender: 'Female',
    location: 'Wall Rose',
    image:
      'https://static.wikia.nocookie.net/shingekinokyojin/images/e/e4/Hange_Zo%C3%AB_%28Anime%29_character_image.png',
  },
  {
    id: 10,
    name: 'Conny Springer',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    location: 'Ragako',
    image:
      'https://static.wikia.nocookie.net/shingekinokyojin/images/3/37/Conny_Springer_%28Anime%29_character_image.png',
  },
  {
    id: 11,
    name: 'Hannes',
    status: 'Deceased',
    species: 'Human',
    gender: 'Male',
    location: 'Wall Rose',
    image:
      'https://static.wikia.nocookie.net/shingekinokyojin/images/0/09/Hannes_%28Anime%29_character_image.png',
  },
  {
    id: 12,
    name: 'Sasha Braus',
    status: 'Deceased',
    species: 'Human',
    gender: 'Female',
    location: 'Dauper',
    image:
      'https://static.wikia.nocookie.net/shingekinokyojin/images/c/ca/Sasha_Braus_%28Anime%29_character_image_%28850%29.png',
  },
];

export class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="about" element={<AboutPage />} />
          <Route path="/" element={<HomePage persons={mock} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    );
  }
}
