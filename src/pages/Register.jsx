import axios from "axios";
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
      const response = await axios.post(
        "https://flixflix-api.onrender.com/api/v1/user/register",
        jsonData
      );

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
    }
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center w-100">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#" onSubmit={handleSubmit}>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign Up to our platform
            </h3>
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
              Sign up account
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
