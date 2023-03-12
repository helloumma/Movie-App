import Head from "next/head";
import { Inter } from "next/font/google";
import Input from "../components/input";
import Result from "../components/result";
import { useState } from "react";
import { Person, MoreInfo } from "../types/types";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [id1, setId1] = useState<string>("");
  const [id2, setId2] = useState<string>("");
  const [moreInfo, setMoreInfo] = useState<MoreInfo>();

  const handleSearch = async (): Promise<MoreInfo> => {
    const [person1Data, person2Data] = await Promise.all([
      fetchID(id1),
      fetchID(id2),
    ]);

    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TEST_TOKEN}&language=en-US&sort_by=primary_release_date.desc&page=1&with_people=${person1Data},${person2Data}`
    ).then((res) => res.json());
    setMoreInfo(data);
    return data;
  };

  const fetchID = async (id: number): Promise<Person> => {
    const data =
      await fetch(`https://api.themoviedb.org/3/search/person?api_key=${process.env.TEST_TOKEN}&query=${id}
  `).then((res) => res.json());
    return data.results[0].id;
  };

  const idOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId1(e.target.value);
  };

  const idTwo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId2(e.target.value);
  };

  // try to fix the issues with the types on everything
  // pull types into its own file and export - remember you can remove duplicates quite easily
  // add zod (the issue with the id type needs to parsed as a string)
  // change the variable names to make it easier to read
  // fix the tests

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
      <main className={inter.className}>
        <h1 className="page-title">
          Name Two Actors/Actresses Who Starred in...
        </h1>
        <hr />
        <Input
          handleSearch={handleSearch}
          idOne={idOne}
          idTwo={idTwo}
          ErrorOne={id1 ? "" : "error"}
          ErrorTwo={id2 ? "" : "error"}
        />
        <Result moreInfo={moreInfo} />
      </main>
    </>
  );
}
