import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MovieDetails from "../pages/MovieDetails/MovieDetails";

const LayoutRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/FilmGard/" element={<HomePage />} />
          <Route path="/FilmGard/Movies" element={<MoviesPage />} />
          <Route path="/FilmGard/Movies/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default LayoutRouter;
