type data = {};

export interface MoreInfo {
  release_date: string | number | Date;
  results: Array<data>;
  title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  id: string;
  personOne: number;
  personTwo: number;
}

export interface Person {
  id: number;
}
