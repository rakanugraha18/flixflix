import axios from "axios";

const API_URL = "https://flixflix-api.onrender.com/api/v1/user";

const login = async (username, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      { username, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const token = response.data.token;
    localStorage.setItem("token", token);

    return token;
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem("token");
};

export { login, logout };
