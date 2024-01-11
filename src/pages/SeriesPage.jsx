import { useEffect, useState } from "react";
import CardSeries from "../components/CardSeries";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SeriesPage() {
  const [dataSeries, setDataSeries] = useState([]);

  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const getApiSeries = async () => {
    const response = await axios(
      "https://api.themoviedb.org/3/discover/tv?api_key=47aab7668ec7bf6aecaf74e0672195c5"
    );

    setDataSeries(response.data.results);
  };

  const navigate = useNavigate();
  useEffect(() => {
    // Cek apakah token tersedia
    const token = localStorage.getItem("token");
    if (!token) {
      // Jika tidak ada token, arahkan ke halaman login
      navigate("/Login");
    } else {
      // Jika ada token, ambil data movie
      getApiSeries();
    }
  }, []);
  return (
    <>
      <div className="py-10"></div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 p-4">
        {dataSeries.length > 0 ? (
          <>
            {dataSeries.map((series, i) => {
              return (
                <div key={i}>
                  <CardSeries
                    id={series.id}
                    title={series.original_name}
                    img={`${imgUrl}${series.poster_path}`}
                    first_date={series.first_air_date}
                    rating={series.vote_average}
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
