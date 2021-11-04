'use strict'

module.exports = class Movie {
  constructor(movieObj) {
    this.title = movieObj.title;
    this.overview = movieObj.overview;
    this.voteAverage = movieObj.vote_average;
    this.voteCount = movieObj.vote_count;
    this.posterPath = `https://image.tmdb.org/t/p/w500${movieObj.poster_path}`;
    this.popularity = movieObj.popularity;
    this.releaseDate = movieObj.release_date;
  }
}

