import { MoreInfo } from "@/libs/data";
import Image from "next/image";
import { useState } from "react";

const Result = (props: { isLoading: boolean; moreInfo: MoreInfo }) => {
  const [showIndex, setShowIndex] = useState<number>(-1);

  return (
    <div className="container m-auto p-8">
      <div className="flex content-around flex-wrap">
        {props.moreInfo?.results < 1 && <h2>No Films Found</h2>}
        {props.isLoading ? (
          "loading"
        ) : (
          <>
            {props.moreInfo?.results?.map((film, index) => (
              <div className="sm:w-full md:w-1/2 lg:w-1/3 p-2" key={film.id}>
                <div className="flex flex-wrap text-gray-800 text-center rounded bg-white p-2 h-full">
                  <div className="w-full">
                    <Image
                      src={`http://image.tmdb.org/t/p/w500${film.poster_path}`}
                      alt={film.title}
                      width={400}
                      height={500}
                      className="shadow-md"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-4xl font-bold">
                      {film.title} ({new Date(film.release_date).getFullYear()})
                    </h3>
                    <p className="break-all mb-4 text-2xl ">
                      {Array(Math.round(film.popularity)).fill("⭐")} (
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
