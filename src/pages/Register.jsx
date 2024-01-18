import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigasi = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Dapatkan data formulir
    const formData = new FormData(event.target);

    // Konversi data formulir ke JSON
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    // Lakukan permintaan ke server untuk menyimpan data
    try {
      // Set loading to true before making the API call
      setLoading(true);

      const response = await axios.post(
        "https://flixflix-api.onrender.com/api/v1/user/register",
        jsonData
      );
      // Reset loading to false after successful register
      setLoading(false);

      // Tangani respons dari server
      if (response.status === 201) {
        // Berhasil mengirim data ke server, Anda dapat melakukan tindakan lainnya
        // Contoh: Mengalihkan ke halaman lain atau memberikan pesan sukses kepada pengguna
        navigasi("/Login");
      } else {
        // Tangani kesalahan dari server (status respons selain 200)
        console.error("Gagal menyimpan data ke server");
      }
    } catch (error) {
      // Tangani kesalahan jaringan atau masalah lainnya
      console.error("Error selama pengiriman data:", error);

      // Reset loading to false after an error occurs
      setLoading(false);

      // Handle API errors and display them on the form
      if (error.response) {
        // Server mengembalikan respons selain 2xx
        console.error("Server error response:", error.response.data);

        // Assuming the API returns error messages in a 'message' field
        const errorMessage = error.response.data.message;

        // Update your component state or use a library like react-toastify to display the error
        // For simplicity, let's update the state with the error message
        setErrorMessage(errorMessage);
      } else if (error.request) {
        // Request dibuat tetapi tidak ada respons dari server
        console.error("No response from server");
      } else {
        // Kesalahan lainnya
        console.error("Error:", error.message);
      }
    }
  };

  const [loading, setLoading] = useState(false); // State for loading
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  return (
    <>
      <div className="h-screen flex justify-center items-center w-100">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#" onSubmit={handleSubmit}>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign Up to our platform
            </h3>
            {/* Add this below the button in your return statement to display the error message */}
            {errorMessage && (
              <div className="text-sm text-red-500 mt-2 dark:text-red-400">
                {errorMessage}
              </div>
            )}
            <div>
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                Your fullname
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="username"
                required
              />
            </div>
            <div>
              <label
                htmlFor="fullname"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                Your fullname
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="fullname"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-500 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              {loading ? "Logging in..." : "Sign up account"}
            </button>

            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Have registered?{" "}
              <Link
                to="/Login"
                className="text-orange-500 hover:underline dark:text-orange-500"
              >
                Sign in here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
