interface data {}

export interface MoreInfo {
  release_date: string | number | Date;
  person1Data: string;
  person2Data: string;
  results: Array<data>;
  title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  id: string;
}

export interface Person {
  id: number;
}
