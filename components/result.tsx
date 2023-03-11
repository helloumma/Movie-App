import Image from "next/image";
import { useState } from "react";

type data = {};

interface MoreInfo {
  person1Data: string;
  person2Data: string;
  results: Array<data>;
  title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  id: string;
}

// to do: more type fixing
const Result = (props: { moreInfo: Array<MoreInfo> }) => {
  const [showIndex, setShowIndex] = useState<number>(-1);

  return (
    <>
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
              {showIndex === index ? (
                <p>{film.overview}</p>
              ) : (
                <p>{`${film.overview.substring(0, 250)}...`}</p>
              )}
              {film.overview.length > 250 && (
                <button
                  className={showIndex === index ? "hide" : "show"}
                  onClick={() =>
                    showIndex === index ? setShowIndex(-1) : setShowIndex(index)
                  }
                >
                  V
                </button>
              )}
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default Result;
