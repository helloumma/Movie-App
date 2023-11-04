export interface data {
  release_date: string | number | Date;
  title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  id: string;
}

export interface MoreInfo {
  results: (Array<data> & number) | Array<data>;
  personOne: number;
  personTwo: number;
}

export interface Person {
  id: string;
}
