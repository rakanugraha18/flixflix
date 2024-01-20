import React, { useEffect, useState } from "react";
import AddressForm from "./AddressForm";
import axios from "axios";

const Profile = () => {
  const [tampilkanAddressForm, setTampilkanAddressForm] = useState(false);
  const [dataAlamatAda, setDataAlamatAda] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const cekDataAlamat = async () => {
      try {
        const response = await axios.get(
          "https://flixflix-api.onrender.com/api/v1/address/addresses/check",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setDataAlamatAda(response.data.data.length > 0);
      } catch (error) {
        console.error("Error checking address data:", error);
      }
    };

    cekDataAlamat();
  }, [token]);

  useEffect(() => {
    // Jika data alamat tidak ada, tampilkan AddressForm
    if (dataAlamatAda !== true) {
      setTampilkanAddressForm(true);
    }
  }, [dataAlamatAda]);

  const handleTambahAlamatClick = () => {
    setTampilkanAddressForm(true);
  };

  const handleCloseAddressForm = () => {
    setTampilkanAddressForm(false);
  };

  return (
    <div>
      <div className="flex items-center mx-auto py-20">
        <img
          src="https://placekitten.com/200/200" // Ganti dengan URL foto profil Anda
          alt="Profile"
          className="rounded-full w-20 h-20 mr-4"
        />
        <div>
          <h2 className="text-2xl font-bold">Username</h2>
          <p className="text-lg font-medium">Fullname</p>
          <p className="text-gray-600">email@example.com</p>
        </div>
      </div>
      <div
        className="max-w-lg py-6 block border border-solid rounded-lg p-[10px] ml-1 hover:border-[#FF6900] hover:text-[#FF6900] hover:cursor-pointer"
        onClick={handleTambahAlamatClick}
      >
        <div className="flex justify-center text-center">
          <p className="font-inter">Tambah Alamat Baru</p>
        </div>
      </div>
      {tampilkanAddressForm && <AddressForm onClose={handleCloseAddressForm} />}
    </div>
  );
};

export default Profile;
