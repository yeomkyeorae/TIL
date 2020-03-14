import React from 'react';
import './Movie.css';

function Movie() {
    return (
        <div>
            <MoviePoster />
            <h1>hello this is a movie</h1>
        </div>
    );
  }

function MoviePoster() {
    return (
        <img alt="" src="https://upload.wikimedia.org/wikipedia/en/8/8a/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_%282001%29.jpg" />
    );
}

export default Movie;