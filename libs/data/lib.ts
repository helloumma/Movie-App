import { useQuery } from "react-query";
import { fetchID, fetchMovies } from "@/pages/api/film-data";

export const useIdOneQuery = (personOne: string) => {
  return useQuery(["idOne", personOne], () => fetchID(personOne));
};

export const useIdTwoQuery = (personTwo: string) => {
  return useQuery(["idTwo", personTwo], () => fetchID(personTwo));
};

export const useMoviesQuery = (idOne: string, idTwo: string) => {
  return useQuery(["movies", idOne, idTwo], () => fetchMovies(idOne, idTwo), {
    enabled: false, // do not fetch by default
  });
};
