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
    <>
      <h2>Results</h2>
      <main className="results-main">
        {props.moreInfo?.results < 1 && <h2>No Films Found</h2>}
        {props.moreInfo?.results?.map((film: any, index: any) => (
          <section key={film.id} className="results">
            <div className="result-image">
              <Image
                src={`http://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.title}
                width={150}
                height={230}
              />
            </div>
            <div className="result-info">
              <h3>
                {film.title} ({new Date(film.release_date).getFullYear()})
              </h3>

              <div>
                <p className="stars-wrap">
                  Rating:{Array(Math.round(film.popularity)).fill("⭐")} (
                  {film.popularity.toFixed(2)})
                </p>
              </div>
              {/* to do: only show more for the one clicked within the map - use an index to track */}
              {/*don't show the button for text less than 250 characters*/}
              {show ? (
                <p>{film.overview}</p>
              ) : (
                `${film.overview.substring(0, 250)}...`
              )}
              <button
                className={show ? "hide" : "show"}
                key={index}
                onClick={() => (show ? setShow(false) : setShow(true))}
              >
                v
              </button>
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default Result;
