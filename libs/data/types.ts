export interface data {
  release_date: string | number | Date;
  title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  id: string;
}

export interface MoreInfo {
  results: data[] & number;
  personOne: number;
  personTwo: number;
}

export interface Person {
  id: number;
}
