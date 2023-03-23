import Image from "next/image";
import { useState } from "react";
import { MoreInfo } from "../types/types";

const Result = (props: { moreInfo: Array<MoreInfo>; test: any } | any) => {
  const [showIndex, setShowIndex] = useState<number>(-1);
  return (
    <div className="container m-auto p-8">
      <div className="flex content-around flex-wrap">
        {props.moreInfo?.results < 1 && <h2>No Films Found</h2>}
        {props.isLoading ? (
          "loading"
        ) : (
          <>
            {props.moreInfo?.results?.map((film: MoreInfo, index: number) => (
              <div className="w-1/3 p-2" key={film.id}>
                <div className="text-gray-700 text-center rounded bg-white p-2 h-full">
                  <div className="result-image">
                    <Image
                      src={`http://image.tmdb.org/t/p/w500${film.poster_path}`}
                      alt={film.title}
                      width={150}
                      height={230}
                      className="shadow-md"
                    />
                  </div>
                  <div className="result-info">
                    <h3>
                      {film.title} ({new Date(film.release_date).getFullYear()})
                    </h3>
                    <p className="break-all">
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
                        className={
                          showIndex === index ? "rotate-0" : "rotate-180"
                        }
                        onClick={() =>
                          showIndex === index
                            ? setShowIndex(-1)
                            : setShowIndex(index)
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
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Result;
