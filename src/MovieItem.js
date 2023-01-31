import React from 'react'

const MovieItem = (props) => {
    return (
        <div className='movie-item_card'>
            <img width={150} src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt='home alone' />
            <h3>{props.title}</h3>
            <p>{props.overview}</p>
        </div>
    )
}

export default MovieItem