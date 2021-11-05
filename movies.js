'use strict'

const axios = require('axios');
const Movie = require('./Movie');

const handleMovieRequest = async (request, response) => {
  console.log('movie request')
  console.log(request.query)
  const {city} = request.query;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${city}&language=en-US&include_adult=false`;
  try {
    const apiResults = await axios.get(url);
    const movieData = apiResults.data.results.map(element => new Movie(element));
    console.log(movieData)
    response.status(200).send(movieData);
  } catch (event) {
    response.status(404).send('Nothing good');
  }
}

module.exports = handleMovieRequest;
