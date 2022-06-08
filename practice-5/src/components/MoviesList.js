import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
    return (<>
        {props.loading && <h2>Loading... </h2>}
        {!props.loading && props.movies.length < 1 && <p>No movies found</p>}
        {!props.loading && props.movies.length > 0 && <ul className={classes['movies-list']}>
            {props.movies.map((movie) => (
                <Movie
                    key={movie.id}
                    title={movie.title}
                    releaseDate={movie.releaseDate}
                    openingText={movie.openingText}
                />
            ))}
        </ul>}
    </>
    );
};

export default MovieList;