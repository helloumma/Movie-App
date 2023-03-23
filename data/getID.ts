/**
  const fetchID = async (id: string): Promise<Person> => {
    const data =
      await fetch(`https://api.themoviedb.org/3/search/person?api_key=${process.env.TEST_TOKEN}&query=${id}
  `).then((res) => res.json());
    return data.results[0].id;
  };

 */

import { Person } from "@/types/types";
import { useQuery } from "react-query";

const fetchID = async (id: string): Promise<Person[]> => {
  const data =
    await fetch(`https://api.themoviedb.org/3/search/person?api_key=${process.env.TEST_TOKEN}&query=${id}
`).then((res) => res.json());
  return data.results[0].id;
};

export default function getID(id: string) {
  return useQuery({ queryKey: ["id", id], queryFn: fetchID });
}
