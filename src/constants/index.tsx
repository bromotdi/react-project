export const EMPTY_STRING = '';

export const LOCAL_STORAGE_KEYS = {
  searchValue: 'searchValue',
};

export const ENTER_KEY_CODES = {
  enter: 'Enter',
  enterNumpad: 'NumpadEnter',
};

export const CHARACTER_STATUS = {
  dead: 'Dead',
  alive: 'Alive',
};

export const CHARACTER_GENDER = {
  male: 'Male',
  female: 'Female',
};

export const ONE_SECOND = 1000;

export const FORM_SELECT_VALUES = ['', 'human', 'alien', 'animal'];

export const FORM_SELECT_OPTIONS = ['--Please choose an option--', 'Human', 'Alien', 'Animal'];

export const URL_BASE = 'https://rickandmortyapi.com/api';

export const URL_ENDPOINTS = {
  character: 'character',
};

export const URL_QUERY_KEYS = {
  name: 'name',
  page: 'page',
  status: 'status',
  gender: 'gender',
};

export const API_ERROR_MESSAGES = {
  charactersNotFound: "Such character doesn't exist",
  unknown: 'Unexpected error occured',
};

export const HTTP_STATUS_CODES = {
  ok: 200,
  notFound: 404,
};

export const FAKE_CARDS_LENGTH = 10;

export const ALPHABETICAL_SORT = {
  ascending: 'alphabetically, from A to Z',
  descending: 'alphabetically, from Z to A',
};

export const CARDS_PER_PAGE = {
  ten: {
    inputValue: '10 items/page',
    numericValue: 10,
  },
  twenty: {
    inputValue: '20 items/page',
    numericValue: 20,
  },
};

export const SEARCH_SELECT_OPTIONS = {
  byStatus: ['Choose status', 'alive', 'dead', 'unknown'],
  byGender: ['Choose gender', 'female', 'male', 'genderless', 'unknown'],
  alphabetically: ['Sort by', ALPHABETICAL_SORT.ascending, ALPHABETICAL_SORT.descending],
  cardsPerPage: [CARDS_PER_PAGE.ten.inputValue, CARDS_PER_PAGE.twenty.inputValue],
};
