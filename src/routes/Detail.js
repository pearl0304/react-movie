import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../components/Movie";

export function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const res = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(res.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h3>Loding...</h3>
      ) : (
        <div>
          <Movie key={movie.id} id={movie.id} medium_cover_image={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} />
        </div>
      )}
    </div>
  );
}
