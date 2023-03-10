import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Input from "../components/input";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// fetch data here [for now]

//https://api.themoviedb.org/3/search/person?api_key=efc8c4ea4aebc0cb03eb170d78fa7cec&query=Jim+carey

// [Hugh Grant, Jim Carrey] for example

//https://api.themoviedb.org/3/discover/movie?api_key=efc8c4ea4aebc0cb03eb170d78fa7cec&language=en-US&sort_by=primary_release_date.desc&page=1&with_people=3291,206

// first you need to get the id for the person searched and then you need to append that to the second api call

// get the first actor and store the ID in state 

// get the second actor and store the ID in state

// use these in a useEffect for the second API repsonse 

// install zod - to extract only the ID in the first response  (maybe)

//move to types file after
interface GetActorID {

}
interface MoviesData {

}

export default function Home() {

  const [person, setPerson] = useState<string>() //but this really needs to be an array - you might need a ref 

  //useEffect to do setPerson and the signature should really be using the interface GetActorID 
  const fetchID = async(person:string) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${ENV.api_key}&query=${person}
    `).then((res) => res.json())

    return data
  }

  // reminder: you might be able to chain the api responses 

  const fetchMovies = async(personOne:string, personTwo:string) => {
    const data = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${ENV.api_key}&language=en-US&sort_by=primary_release_date.desc&page=1&with_people=${personOne},${personTwo}`)
    .then((res) => res.json())

    return data
  }


	return (
		<>
			<Head>
				<title>Movies app</title>
				<meta
					name="description"
					content="Search for two actors who have been in the same movie."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<>
				<Input />
			</>
		</>
	);
}
