import { Link, useNavigate } from "react-router-dom";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import Label from "../Elements/Input/Label";
import { useState } from "react";
import { login } from "../../Services/authService";

const MAX_LOGIN_ATTEMPTS = 8; // Set the maximum number of login attempts

const FormLogin = () => {
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
    <form className="space-y-6" onSubmit={handleLogin}>
      {error && <div className="text-red-500 text-sm font-medium">{error}</div>}
      {loginAttempts >= 3 && (
        <p className="text-gray-500 text-xs">
          Remaining login attempts: {remainingAttempts}
        </p>
      )}
      <InputForm
        label="Your username or email"
        htmlFor="identifier"
        type="text"
        name="identifier"
        id="identifier"
        placeholder="username or email"
        required
        value={formData.identifier}
        onChange={handleInputChange}
      />
      <InputForm
        label="Your password"
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
        {loading ? "Logging in..." : "Login to your account"}
      </Button>
      <Label>
        Not registered?{" "}
        <Link
          to="/Register"
          className="text-orange-500 hover:underline dark:text-orange-500"
        >
          Create account
        </Link>
      </Label>
    </form>
  );
};

export default FormLogin;
