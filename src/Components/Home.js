import React from "react";
import { Link } from "react-router-dom";

function Home({ movies }) {
  return (
    <div className="Home">
      <h2>Watch and Enjoy! </h2>
      <div className='movie-list'>
        {movies.map((index, key) => (
          <Link key={key} to={`/movies/${index.id}`}>
            <img src={index.poster} />
            <h4>{index.title}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
