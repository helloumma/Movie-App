import Image from "next/image";

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
  console.log(props.moreInfo);
  return (
    <>
      {props.moreInfo?.results < 1 && <p>No Films Found</p>}
      {props.moreInfo?.results?.map((a: any) => (
        <div key={a.id}>
          <p>{a.title}</p>
          <Image
            src={`http://image.tmdb.org/t/p/w500${a.poster_path}`}
            alt="text"
            width={400}
            height={600}
          />
          <p>{new Date(a.release_date).getFullYear()}</p>
          <p>Rating: {Array(Math.round(a.popularity)).fill("⭐")}</p>
          <p>{a.overview}</p>
        </div>
      ))}
    </>
  );
};

export default Result;
