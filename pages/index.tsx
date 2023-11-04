import { useState } from "react";
import Head from "next/head";
import Input from "../components/input";
import Result from "../components/result";
import { useIdOneQuery, useIdTwoQuery, useMoviesQuery } from "../libs/data";

export default function Home() {
  const [personOne, setPersonOne] = useState<string>("person one");
  const [personTwo, setPersonTwo] = useState<string>("person two");

  const { data: idOne } = useIdOneQuery(personOne);
  const { data: idTwo } = useIdTwoQuery(personTwo);

  const {
    data: moreInfo,
    isLoading,
    refetch: moreInfoRefetch,
  } = useMoviesQuery(idOne, idTwo);

  const onChangeIdOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonOne(e.target.value);
  };

  const onChangeIdTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonTwo(e.target.value);
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
        <h1 className="text-5xl text-center">
          Name Two Actors/Actresses Who Starred in...
        </h1>

        <Input
          handleSearch={moreInfoRefetch}
          idOne={onChangeIdOne}
          idTwo={onChangeIdTwo}
        />
        <Result moreInfo={moreInfo} isLoading={isLoading} />
      </main>
    </>
  );
}
