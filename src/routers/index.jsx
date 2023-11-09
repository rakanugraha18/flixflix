import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MovieTopRatePage from "../pages/MovieTopRatePage";
import PopularPage from "../pages/PopularPage";
import DetailMoviePage from "../pages/DetailMoviePage";
import SeriesPage from "../pages/SeriesPage";
import DetailSeriesPage from "../pages/DetailSeriesPage";
import DetailMovieTopRatePage from "../pages/DetailMovieTopRatePage";
import DetailPopularPage from "../pages/DetailPopularPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/detail/:id",
    element: <DetailMoviePage />,
  },
  {
    path: "/detailSeries/:id",
    element: <DetailSeriesPage />,
  },
  {
    path: "/detailTopRate/:id",
    element: <DetailMovieTopRatePage />,
  },
  {
    path: "/detailPopular/:id",
    element: <DetailPopularPage />,
  },

  {
    path: "/MovieTopRatePage",
    element: <MovieTopRatePage />,
  },
  {
    path: "/Series",
    element: <SeriesPage />,
  },
  {
    path: "/Popular",
    element: <PopularPage />,
  },
]);
