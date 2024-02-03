import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store.js";

import App from "./App.jsx";
import "./index.css";
//import pages
import HomePage from "./pages/HomePage";
import DetailMoviePage from "./pages/detailMovie.jsx";
import DetailSeriesPage from "./pages/detailSeries.jsx";
import MovieTopRatePage from "./pages/movieTopRate.jsx";
import MovieUpcoming from "./pages/MovieUpcoming";
import SeriesPage from "./pages/SeriesPage";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
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
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
