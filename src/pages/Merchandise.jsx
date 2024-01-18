import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

function Merchandise() {
  const [dataProduct, setDataProduct] = useState([]);

  const getApiProduct = async () => {
    const response = await axios(
      "https://flixflix-api.onrender.com/api/v1/product"
    );

    setDataProduct(response.data);
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
      getApiProduct();
    }
  }, []);

  const dataProdukALL = dataProduct.data || [];

  return (
    <>
      <div className="py-10"></div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {dataProdukALL.length > 0 ? (
          <>
            {dataProdukALL.map((product, index) => {
              return (
                <div key={index}>
                  <ProductCard
                    redirect="/detailProduct"
                    id={product.product_id}
                    title={product.name_product}
                    img={product.image}
                    specification={product.specification}
                    price={product.price}
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
export default Merchandise;
