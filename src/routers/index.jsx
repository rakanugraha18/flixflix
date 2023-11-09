import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MoviePage from "../pages/MoviePage";
import PopularPage from "../pages/PopularPage";
import DetailMoviePage from "../pages/DetailMoviePage";
import SeriesPage from "../pages/SeriesPage";
import DetailSeriesPage from "../pages/DetailSeriesPage";

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
    path: "/Movies",
    element: <MoviePage />,
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
