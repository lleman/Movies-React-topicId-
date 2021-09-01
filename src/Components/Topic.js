import React from 'react'
import {useRouteMatch} from 'react-router-dom'

function Topic({movies}) {
    const match = useRouteMatch();
    console.log(match);
    const movie = movies.filter(index => index.id === Number(match.params.topicId));
    console.log(movie);
    return (
        <div className="Topic">
            
            <div className="movie-info">
                <img src={movie[0].poster} />
                <div className="text">
                <h1>{movie[0].title}</h1>
            <p>Year: <span>{movie[0].year}</span></p>
            <p>Genre: <span>{movie[0].category }</span></p>
            <p>Starring: <span>{movie[0].stars}</span></p>
                    <p>Description: {movie[0].info}</p>
                    <button>Watch</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default Topic
