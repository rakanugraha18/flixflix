import { useEffect, useState } from "react";
import CardPopular from "../components/CardsPopular";
import Header from "../components/Header";
import axios from "axios";
export default function HomePage() {
  const [dataPopular, setDataPopular] = useState([]);

  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const getApiPopular = async () => {
    const response = await axios(
      "https://api.themoviedb.org/3/discover/movie?api_key=47aab7668ec7bf6aecaf74e0672195c5"
    );

    setDataPopular(response.data.results);
  };

  useEffect(() => {
    getApiPopular();
  }, []);

  return (
    <>
      <Header />
      {/* <Navbar /> */}
      <div className="py-10"></div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {dataPopular.length > 0 ? (
          <>
            {dataPopular.map((movie, i) => {
              return (
                <div key={i}>
                  <CardPopular
                    id={movie.id}
                    title={movie.original_title}
                    img={`${imgUrl}${movie.poster_path}`}
                    date={movie.release_date}
                    rating={movie.vote_average}
                  />
                </div>
              );
            })}
          </>
        ) : (
          <>
            <div>Tidak ada data</div>
          </>
        )}
      </div>
    </>
  );
}
