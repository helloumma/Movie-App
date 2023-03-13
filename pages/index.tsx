import Head from "next/head";
import Input from "../components/input";
import Result from "../components/result";
import { useState } from "react";
import { Person, MoreInfo } from "../types/types";

export default function Home() {
  const [personOne, setpersonOne] = useState<string | number>("");
  const [personTwo, setpersonTwo] = useState<string>("");
  const [moreInfo, setMoreInfo] = useState<MoreInfo>();

  const handleSearch = async (): Promise<MoreInfo> => {
    const [IdOne, IdTwo] = await Promise.all([
      fetchID(personOne),
      fetchID(personTwo),
    ]);

    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TEST_TOKEN}&language=en-US&sort_by=primary_release_date.desc&page=1&with_people=${IdOne},${IdTwo}`
    ).then((res) => res.json());
    setMoreInfo(data);
    console.log(data);
    return data;
  };

  const fetchID = async (id: number): Promise<Person> => {
    const data =
      await fetch(`https://api.themoviedb.org/3/search/person?api_key=${process.env.TEST_TOKEN}&query=${id}
  `).then((res) => res.json());
    return data.results[0].id;
  };

  const idOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpersonOne(e.target.value);
  };

  const idTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpersonTwo(e.target.value);
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
        <h1 className="page-title">
          Name Two Actors/Actresses Who Starred in...
        </h1>
        <hr />
        <Input
          handleSearch={handleSearch}
          idOne={idOne}
          idTwo={idTwo}
          ErrorOne={personOne ? "" : "error"}
          ErrorTwo={personTwo ? "" : "error"}
        />
        <Result moreInfo={moreInfo} />
      </main>
    </>
  );
}
