import { useState } from "react";
import Head from "next/head";
import { useQuery } from "react-query";
import Input from "../components/input";
import Result from "../components/result";
import { MoreInfo, Person } from "@/types/types";

export default function Home() {
  const [personOne, setPersonOne] = useState<string>("person one");
  const [personTwo, setPersonTwo] = useState<string>("person two");

  // create custom hooks to fetch person IDs and movie data
  const { data: idOne } = useQuery(["idOne", personOne], () =>
    fetchID(personOne)
  );
  const { data: idTwo } = useQuery(["idTwo", personTwo], () =>
    fetchID(personTwo)
  );

  const {
    data: moreInfo,
    isLoading,
    refetch: moreInfoRefetch,
  } = useQuery(["movies", idOne, idTwo], () => fetchMovies(idOne, idTwo), {
    enabled: false, // do not fetch by default
  });

  // fetch IDs of user inputs
  const fetchID = async (id: string): Promise<Person> => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/person?api_key=${process.env.TEST_TOKEN}&query=${id}`
    ).then((res) => res.json());
    return data.results[0].id;
  };

  // fetch film data from two IDs
  const fetchMovies = async (
    idOne: string,
    idTwo: string
  ): Promise<MoreInfo> => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TEST_TOKEN}&language=en-US&sort_by=primary_release_date.desc&page=1&with_people=${idOne},${idTwo}`
    ).then((res) => res.json());
    return data;
  };

  // set state for input one
  const onChangeIdOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonOne(e.target.value);
  };

  // set state for input two
  const onChangeIdTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonTwo(e.target.value);
  };

  const handleSearch = () => {
    moreInfoRefetch();
  };

  return (
    <>
      <Head>
        <title>Movie App</title>
        <meta
          name="description"
          content="View two actors/actresses who have been in the same film."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="page-title text-center">
          Name Two Actors/Actresses Who Starred in...
        </h1>

        <Input
          handleSearch={handleSearch}
          idOne={onChangeIdOne}
          idTwo={onChangeIdTwo}
          ErrorOne={
            personOne
              ? "bg-white text-gray-700 border border-gray-500 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mx-4"
              : "bg-white text-gray-700 border border-gray-500 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  mx-4"
          }
          ErrorTwo={
            personTwo
              ? "bg-white text-gray-700 border border-gray-500 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  mx-4"
              : "bgbg-white text-gray-700 border border-gray-500 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  mx-4"
          }
        />
        <Result moreInfo={moreInfo} isLoading={isLoading} />
      </main>
    </>
  );
}
