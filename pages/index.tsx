import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Input from "../components/input";
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
    console.log(data);
    return data;
  };

  const fetchID = async (id: number): Promise<Person> => {
    const data =
      await fetch(`https://api.themoviedb.org/3/search/person?api_key=${process.env.TEST_TOKEN}&query=${id}
  `).then((res) => res.json());
    return data.results[0].id;
  };

  // extract out the date
  // make the input one component
  // look into react-query to handle the data side of things - to separate concerns and make it look tidy
  // make the result into another component
  // add chakra ui
  // create cards on result with a chevron to expand to view more details
  // fix types/interfaces - go back over notes and add in generics (things like id are shared)
  // change variable names (tidy it up)
  // zod (?!)
  // add vitest and do some snapshot testing (add coverage too)
  // create a simple read me
  // more time: add in react-select
  // more time: errror handling (ie no numbers in inputs and if there are no results show a message, 500/400 error response on api)

  return (
    <>
      <div>
        <label htmlFor="id1">ID 1:</label>
        <input
          type="text"
          id="id1"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setId1(e.target.value)
          }
        />
      </div>
      <div>
        <label htmlFor="id2">ID 2:</label>
        <input
          type="text"
          id="id2"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setId2(e.target.value)
          }
        />
      </div>
      <button onClick={handleSearch}>Search</button>
      {/*fix types here age*/}
      {moreInfo?.results?.map((a) => (
        <div key={a.id}>
          <p>{a.title}</p>
          <p>{a.overview}</p>
          <p>{Array(Math.round(a.popularity)).fill("⭐")}</p>
          <p>
            make this into an nextjs Image:
            <img src={`http://image.tmdb.org/t/p/w500/${a.poster_path}`} />
          </p>
          <p>extract out the date:{a.release_date}</p>
        </div>
      ))}
    </>
  );
}
