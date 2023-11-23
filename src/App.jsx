import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieTopRatePage from "./pages/MovieTopRatePage";
import DetailMoviePage from "./pages/DetailMoviePage";
import SeriesPage from "./pages/SeriesPage";
import DetailSeriesPage from "./pages/DetailSeriesPage";
import NowPlayingPage from "./pages/NowPlayingPage";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailMoviePage />} />
          <Route path="/detailSeries/:id" element={<DetailSeriesPage />} />
          <Route path="/MovieTopRatePage" element={<MovieTopRatePage />} />
          <Route path="/Series" element={<SeriesPage />} />
          <Route path="/NowPlaying" element={<NowPlayingPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
