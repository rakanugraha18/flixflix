import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

export default function DetailMovieTopRatePage() {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const [dataDetailTopRate, setDataDetailTopRate] = useState({});

  const params = useParams();

  const getDetailApiMovieTopRate = async () => {
    const response = await axios(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=47aab7668ec7bf6aecaf74e0672195c5`
    );
    setDataDetailTopRate(response.data);
  };

  useEffect(() => {
    getDetailApiMovieTopRate();
  }, []);

  return (
    <>
      <Header />
      <div className="py-10"></div>
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-20">
          <div className="m-auto">
            <img src={`${imgUrl}${dataDetailTopRate.poster_path}`} />
          </div>
          <div className="items-start">
            <h1 className="text-3xl font-semibold mb-2">
              {dataDetailTopRate.title}
            </h1>
            <p className="text-gray-500 mb-2">{dataDetailTopRate.overview}</p>
            <p className="text-gray-500 mb-2">
              {dataDetailTopRate.vote_average}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
