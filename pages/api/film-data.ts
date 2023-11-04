import { MoreInfo, Person } from "@/libs/data";

export const fetchID = async (id: string): Promise<Person> => {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/person?api_key=${process.env.TEST_TOKEN}&query=${id}`
  ).then((res) => res.json());
  return data.results[0].id;
};

// fetch film data from two IDs
export const fetchMovies = async (
  idOne: string,
  idTwo: string
): Promise<MoreInfo> => {
  const data = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TEST_TOKEN}&language=en-US&sort_by=primary_release_date.desc&page=1&with_people=${idOne},${idTwo}`
  ).then((res) => res.json());
  return data;
};
