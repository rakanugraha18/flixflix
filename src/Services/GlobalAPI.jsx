import axios from "axios";

const movieBaseUrl = import.meta.env.VITE_APP_BASEURL;
const api_key = import.meta.env.VITE_APP_API_KEY;

const getTrendingVideo = async () => {
  try {
    const resTrendingVideo = await axios.get(
      `${movieBaseUrl}/movie/popular?api_key=${api_key}`
    );
    return resTrendingVideo;
  } catch (error) {
    console.error("Get trending video data error", error);
    throw error;
  }
};

const getTopRate = async () => {
  try {
    const resTopRate = await axios.get(
      `${movieBaseUrl}/movie/top_rated?api_key=${api_key}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return resTopRate;
  } catch (error) {
    console.error("Get top-rated data error", error);
    throw error;
  }
};

export { getTrendingVideo, getTopRate };
