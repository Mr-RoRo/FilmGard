import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MovieDetails from "../pages/MovieDetails/MovieDetails";

const LayoutRouter = () => {
  return (
    <>
      <Router basename="/FilmGard">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Movies" element={<MoviesPage />} />
          <Route path="/Movies/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default LayoutRouter;
