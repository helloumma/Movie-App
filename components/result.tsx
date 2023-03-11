import Image from "next/image";
import { useState } from "react";

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

// to do: more type fixing
const Result = (props: { moreInfo: any }) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <main>
      {props.moreInfo?.results < 1 && <p>No Films Found</p>}
      {props.moreInfo?.results?.map((film: any) => (
        <section key={film.id} className="results">
          <div>
            <Image
              src={`http://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt={film.title}
              width={150}
              height={230}
            />
          </div>
          <div>
            <p>
              {film.title} ({new Date(film.release_date).getFullYear()})
            </p>
            <p>{Array(Math.round(film.popularity)).fill("⭐")}</p>
            <button
              className={show ? "hide" : "show"}
              onClick={() => (show ? setShow(false) : setShow(true))}
            >
              v
            </button>
            {show && <p>{film.overview}</p>}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Result;
