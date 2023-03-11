import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Input from "../components/input";
import Result from "../components/result";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface Person {
  id: number;
}

interface MoreInfo {
  person1Data: string;
  person2Data: string;
  results: {}[]; // redo this
  title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  id: string;
}

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

  // reminder: semantic HTML
  // move the data side of things into api folder (do some reading)
  // make the result into another component
  // fix types/interfaces - go back over notes and add in generics (things like id are shared)
  // change variable names (tidy it up)
  // zod (?!)
  // add vitest and do some snapshot testing (add coverage too)
  // create a simple read me
  // more time: add in react-select
  // more time: errror handling on the inputs
  // mmore time: pagination for more than 6 results etc.
  return (
    <>
      <h1>Name Two Actors/Actresses Who Starred in...</h1>
      <hr />
      <Input handleSearch={handleSearch} idOne={idOne} idTwo={idTwo} />
      <h2>Results</h2>
      <Result moreInfo={moreInfo} />
    </>
  );
}
