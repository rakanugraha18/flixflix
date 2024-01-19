import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
//import pages
import HomePage from "./pages/HomePage";
import DetailMoviePage from "./pages/DetailMoviePage";
import DetailSeriesPage from "./pages/DetailSeriesPage";
import MovieTopRatePage from "./pages/MovieTopRatePage";
import MovieUpcoming from "./pages/MovieUpcoming";
import SeriesPage from "./pages/SeriesPage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import Merchandise from "./pages/Merchandise.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Profile from "./pages/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/detail/:id", element: <DetailMoviePage /> },
      { path: "/detailSeries/:id", element: <DetailSeriesPage /> },
      { path: "/detailProduct/:id", element: <ProductDetails /> },
      { path: "/TopRate", element: <MovieTopRatePage /> },
      { path: "/Series", element: <SeriesPage /> },
      { path: "/Upcoming", element: <MovieUpcoming /> },
      { path: "/Login", element: <LoginPage /> },
      { path: "/Register", element: <RegisterPage /> },
      { path: "/Merchandise", element: <Merchandise /> },
      { path: "/Profile", element: <Profile /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
