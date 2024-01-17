import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Services/authService";

const MAX_LOGIN_ATTEMPTS = 8; // Set the maximum number of login attempts

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // State for loading
  const [error, setError] = useState(null);
  const [loginAttempts, setLoginAttempts] = useState(0); // Track login attempts

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Memastikan formData yang dikirimkan tidak kosong
      if (!formData.identifier || !formData.password) {
        setError("Username or email and password must be filled.");
        return;
      }

      // Check if the maximum number of login attempts has been reached
      if (loginAttempts >= MAX_LOGIN_ATTEMPTS) {
        setError("Maximum login attempts reached. Please try again later.");
        return;
      }

      // Set loading to true before making the API call
      setLoading(true);

      // Melanjutkan dengan proses login
      const token = await login(formData.identifier, formData.password);

      // Reset loading to false after successful login
      setLoading(false);

      // Redirect setelah login berhasil
      navigate("/");
    } catch (error) {
      console.error("Login error", error);
      setError("Invalid username or password. Please try again."); // Set error message
      // Reset loading to false after an error occurs
      setLoading(false);
      // Increment the login attempts counter
      setLoginAttempts((prevAttempts) => prevAttempts + 1);
    }
  };

  const remainingAttempts = MAX_LOGIN_ATTEMPTS - loginAttempts;

  return (
    <>
      <div className="h-screen flex justify-center items-center w-100">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" onSubmit={handleLogin}>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>
            {error && (
              <div className="text-red-500 text-sm font-medium mb-4">
                {error}
              </div>
            )}
            {loginAttempts >= 3 && (
              <p className="text-gray-500 mb-4 text-sm">
                Remaining login attempts: {remainingAttempts}
              </p>
            )}
            <div>
              <label
                htmlFor="identifier"
                className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
              >
                Your username or email
              </label>
              <input
                type="text"
                name="identifier"
                id="identifier"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="username or email"
                required
                value={formData.identifier}
                onChange={handleInputChange}
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
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-500 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              {loading ? "Logging in..." : "Login to your account"}
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <Link
                to="/Register"
                className="text-orange-500 hover:underline dark:text-orange-500"
              >
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
