import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetails, Search, PageNotFound } from "../pages/Index";

export const AllRouter = () => {
  return (
    <>
    <div className="dark:bg-blue-800">
      <Routes>
        <Route exact path="/" element={<MovieList apiPath="movie/now_playing" title="Home" />} />
        <Route exact path="/movie/:id" element={<MovieDetails />} />
        <Route exact path="/movies/popular" element={<MovieList apiPath ="movie/popular" title="Popular" />} />
        <Route exact path="/movies/top" element={<MovieList apiPath ="movie/top_rated" title="Top Rated"/>} />
        <Route exact path="/movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming" />} />
        <Route exact path="/search" element={<Search apipath="search/movie"/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </div>
    </>
  );
};
