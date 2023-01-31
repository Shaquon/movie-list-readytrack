import React from 'react'
import MovieItem from './MovieItem'

const MovieList = (props) => {

    return (
        <ul>
            {props.movieItems.map((movie) => {
                return (<li>
                    <MovieItem
                    title={movie.title}
                    overview={movie.overview}
                    poster_path={movie.poster_path}
                    />
                </li>)
            })}
        </ul>
    )
}

export default MovieList