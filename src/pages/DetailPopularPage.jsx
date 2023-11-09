import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

export default function DetailPopularPage() {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const [dataDetailPopular, setDataDetailPopular] = useState({});

  const params = useParams();

  const getDetailApiPopular = async () => {
    const response = await axios(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=47aab7668ec7bf6aecaf74e0672195c5`
    );
    setDataDetailPopular(response.data);
  };

  useEffect(() => {
    getDetailApiPopular();
  }, []);

  return (
    <>
      <Header />
      <div className="py-10"></div>
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-20">
          <div className="m-auto">
            <img src={`${imgUrl}${dataDetailPopular.poster_path}`} />
          </div>
          <div className="items-start">
            <h1 className="text-3xl font-semibold mb-2">
              {dataDetailPopular.title}
            </h1>
            <p className="text-gray-500 mb-2">{dataDetailPopular.overview}</p>
            <p className="text-gray-500 mb-2">
              {dataDetailPopular.vote_average}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
