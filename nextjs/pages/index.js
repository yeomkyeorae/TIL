import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo"


export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  }

  return (
    <div className="container">
      <Seo title={"Home"} />
      {results?.map(movie => (
        <div className="movie" key={movie.id} onClick={() => onClick(movie.id, movie.original_title)}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`} as={`/mmovies/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {  // should be getServerSideProps
  // will be run on only server
  const { results } = await (
    await fetch(
      `http://localhost:3000/api/movies`
    )
  ).json();

  // _app.j에서 pageProps로 넘겨준 덕분에 index.js의 Home component가 아래 results를 props로 받을 수 있다.
  return {
    props: {
      results
    }
  };
}