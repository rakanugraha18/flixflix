import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import Slider from "../components/Slider";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [dataMovie, setDataMovie] = useState([]);
  const imgUrl = `${import.meta.env.VITE_APP_IMGURL}`;
  const navigate = useNavigate();

  useEffect(() => {
    getApiMovie();
  }, []);

  const getApiMovie = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_BASEURL}/discover/movie?api_key=${
          import.meta.env.VITE_APP_API_KEY
        }`
      );

      setDataMovie(response.data.results);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  return (
    <>
      <div className="py-10"></div>
      <Slider />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {dataMovie.length > 0 ? (
          <>
            {dataMovie.map((movie, i) => {
              return (
                <div key={i}>
                  <Card
                    redirect="/detail"
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
};

export default HomePage;
