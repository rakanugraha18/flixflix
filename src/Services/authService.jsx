import axios from "axios";

const API_URL = import.meta.env.VITE_FLIXFLIX_API;

const login = async (identifier, password) => {
  try {
    const resLogin = await axios.post(
      `${API_URL}/login`,
      { identifier, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const token = resLogin.data.token;
    localStorage.setItem("token", token);

    return token;
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};

const register = async (username, email, fullname, password) => {
  try {
    const resRegister = await axios.post(
      `${API_URL}/register`,
      { username, email, password, fullname },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return resRegister;
  } catch (error) {
    console.error("Registration failed", error);
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem("token");
};

export { login, register, logout };
