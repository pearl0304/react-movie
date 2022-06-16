import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Movie } from "../components/Movie";

export function Home() {
  const [loading, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const res = await fetch(`https://yts.mx/api/v2/list_movies.json`);
    const json = await res.json();
    setMovies(json.data.movies);
    setLoding(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h3>Loding...</h3>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie key={movie.id} id={movie.id} medium_cover_image={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} />
          ))}
        </div>
      )}
    </div>
  );
}
