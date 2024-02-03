import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { getTopRate } from "../Services/globalAPI";

export default function MovieTopRatePage() {
  // const [dataMovieTopRate, setDataMovieTopRate] = useState([]);
  const [fromData, setFromData] = useState({});

  const imgUrl = import.meta.env.VITE_TMDB_IMG;

  const getApiMovieTopRate = async () => {
    const response = await getTopRate(fromData);

    setFromData(response.data.results);
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
      getApiMovieTopRate();
    }
  }, []);

  return (
    <>
      <div className="py-10"></div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {fromData.length > 0 ? (
          <>
            {fromData.map((movieTr, i) => {
              return (
                <div key={i}>
                  <Card
                    redirect="/detail"
                    id={movieTr.id}
                    title={movieTr.original_title}
                    img={`${imgUrl}${movieTr.poster_path}`}
                    date={movieTr.release_date}
                    rating={movieTr.vote_average}
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
