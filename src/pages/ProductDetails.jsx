import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetails() {
  const [dataProductDetails, setDataProductDetails] = useState([]);

  const params = useParams();

  const getProductDetail = async () => {
    const response = await axios(
      `https://flixflix-api.onrender.com/api/v1/product/${params.id}`
    );
    setDataProductDetails(response.data);
  };

  const productDetail = dataProductDetails.data || [];

  const navigate = useNavigate();
  useEffect(() => {
    // Cek apakah token tersedia
    const token = localStorage.getItem("token");
    if (!token) {
      // Jika tidak ada token, arahkan ke halaman login
      navigate("/Login");
    } else {
      // Jika ada token, ambil data movie
      getProductDetail();
    }
  }, []);

  return (
    <>
      <div className="py-10"></div>
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-20">
          <div className="m-auto">
            <img src={productDetail.image} />
          </div>
          <div className="items-start">
            <h1 className="text-3xl font-semibold mb-2">
              {productDetail.name_product}
            </h1>
            <p className="text-gray-500 mb-2">{productDetail.specification}</p>
            <p className="text-gray-500 mb-2">Rp. {productDetail.price}</p>
          </div>
        </div>
      </div>
    </>
  );
}
