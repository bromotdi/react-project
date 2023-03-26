export interface Person {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  location: string;
  image: string;
}

export interface User {
  id: number;
  name: string;
  surname: string;
  birthday: string;
  country: string;
  gender: string;
  avatar: File;
}
