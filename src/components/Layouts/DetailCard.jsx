import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DetailCard = ({
  category,
  baseUrl = import.meta.env.VITE_APP_BASEURL,
  apiKey = import.meta.env.VITE_APP_API_KEY,
}) => {
  const imgUrl = import.meta.env.VITE_TMDB_IMG;
  const [dataDetail, setDataDetail] = useState({});

  const params = useParams();

  const getDetail = async () => {
    const response = await axios(
      `${baseUrl}/${category}/${params.id}?api_key=${apiKey}`
    );
    setDataDetail(response.data);
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
      getDetail();
    }
  }, []);
  return (
    <>
      <div className="py-10"></div>
      <section className="mx-auto h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-20">
          <div className="m-auto">
            <img src={`${imgUrl}${dataDetail.poster_path}`} />
          </div>
          <div className="items-start">
            <h1 className="text-3xl font-semibold mb-2">{dataDetail.title}</h1>
            <p className="text-gray-500 mb-2">{dataDetail.overview}</p>
            <p className="text-gray-500 mb-2">{dataDetail.vote_average}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailCard;
