import React from "react";
import PropTypes from "prop-types";
import "./Movies.css";

function Movie({ id, title, year, rating, runtime, genres, summary, coverImage }) {
    return (
        <div className="movie">
            <img src={coverImage} width="100px" height="150px" alt={title} />
            <div>
                <h5 className="movie_title">{title}</h5>
                <span className="movie_genre">{genres.map((curr) => curr + " ")}</span>
                <p className="movie_summary">{summary}</p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    genre: PropTypes.array,
    summary: PropTypes.string,
    coverImage: PropTypes.string,
}

export default Movie;