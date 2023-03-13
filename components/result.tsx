import Image from "next/image";
import { useState } from "react";
import { MoreInfo } from "../types/types";

const Result = (props: { moreInfo: Array<MoreInfo> } | any) => {
  const [showIndex, setShowIndex] = useState<number>(-1);
  return (
    <main className="results-main">
      {props.moreInfo?.results < 1 && <h2>No Films Found</h2>}
      {props.moreInfo?.results?.map((film: MoreInfo, index: number) => (
        <section key={film.id} className="results">
          <div className="result-image">
            <Image
              src={`http://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt={film.title}
              width={150}
              height={230}
              className="film-img"
            />
          </div>
          <div className="result-info">
            <h3>
              {film.title} ({new Date(film.release_date).getFullYear()})
            </h3>
            <p className="stars-wrap">
              Rating:{Array(Math.round(film.popularity)).fill("⭐")} (
              {film.popularity.toFixed(2)})
            </p>
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
                <Image
                  priority
                  src="/chevron.svg"
                  height={32}
                  width={32}
                  alt="chevron"
                />
              </button>
            )}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Result;
