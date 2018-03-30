import React, { Component }  from 'react';
import './Movie.css';
import Prototypes from 'prop-types'

function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie_Columns">
                <MoviePoster poster={poster} className="Movie_Poster" alt={title}/>
            </div>
            <div className="Movie_Columns">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index ) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie_Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    )
}

function MoviePoster({poster, alt}){
    return (
        <img src={poster} title={alt} alt={alt}/>
    )
}

function MovieGenre({genre}){
    return (
        <span className="Movie_Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: Prototypes.string.isRequired,
    poster: Prototypes.string.isRequired,
    genres: Prototypes.array.isRequired,
    synopsis: Prototypes.string.isRequired
}

MoviePoster.prototypes = {
    poster: Prototypes.string.isRequired,
    alt: Prototypes.string.isRequired
}

MovieGenre.prototype = {
    genre: Prototypes.string.isRequired
}

export default Movie