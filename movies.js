'use strict'

const axios = require('axios');
const Movie = require('./Movie');
const cache = require('./cache');

const handleMovieRequest = async (request, response) => {
  const {city} = request.query;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${city}&language=en-US&include_adult=false`;
  const key = city;
  if (cache[key] && (Date.now() - cache[key].timestamp < 3600000)) { // New data if data older than 1 hours
    response.status(200).send(cache[key].movieData);
  } else {
    cache[key] = {};
    cache[key].timestamp = Date.now();
    try {
      const apiResults = await axios.get(url);
      cache[key].movieData = apiResults.data.results.map(element => new Movie(element));
      response.status(200).send(cache[key].movieData);
    } catch (event) {
      response.status(404).send('Nothing good');
    }
  }
}

module.exports = handleMovieRequest;
