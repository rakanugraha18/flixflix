import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../Services/authService";
import Label from "../Elements/Input/Label";
import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    fullname: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      // Set loading to true before making the API call
      setLoading(true);

      const response = await register(
        formData.username,
        formData.email,
        formData.password,
        formData.fullname
      );
      // Reset loading to false after successful register
      setLoading(false);

      // Tangani respons dari server
      if (response.status === 201) {
        // Berhasil mengirim data ke server, Anda dapat melakukan tindakan lainnya
        // Contoh: Mengalihkan ke halaman lain atau memberikan pesan sukses kepada pengguna
        navigate("/Login");
      } else {
        // Tangani kesalahan dari server (status respons selain 201)
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
    <form className="space-y-6" action="#" onSubmit={handleRegister}>
      {errorMessage && (
        <div className="text-sm text-red-500 mt-2 dark:text-red-400">
          {errorMessage}
        </div>
      )}
      <InputForm
        label="Your Username"
        htmlFor="username"
        type="text"
        name="username"
        id="username"
        placeholder="username"
        required
        value={formData.username}
        onChange={handleInputChange}
      />
      <InputForm
        label="Your Fullname"
        htmlFor="fullname"
        type="text"
        name="fullname"
        id="fullname"
        placeholder="fullname"
        required
        value={formData.fullname}
        onChange={handleInputChange}
      />
      <InputForm
        label="Your E-mail"
        htmlFor="email"
        type="email"
        name="email"
        id="email"
        placeholder="email"
        required
        value={formData.email}
        onChange={handleInputChange}
      />
      <InputForm
        label="Your Password"
        htmlFor="password"
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
        required
        value={formData.password}
        onChange={handleInputChange}
      />
      <Button
        type="submit"
        classname={`dark:bg-orange-500 dark:hover:bg-orange-700 dark:focus:ring-orange-800 bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 `}
      >
        {loading ? "Logging in..." : "Sign up account"}
      </Button>
      <Label>
        Have registered?{" "}
        <Link
          to="/Login"
          className="text-orange-500 hover:underline dark:text-orange-500"
        >
          Sign in here
        </Link>
      </Label>
    </form>
  );
};

export default FormRegister;
