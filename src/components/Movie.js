import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export function Movie({ id, medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <div key={id}>
        <img src={medium_cover_image} alt={title}></img>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
          {genres.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};
