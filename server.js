'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const Forecast = require('./Forecast');
const Movie = require('./Movie');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

const handleWeatherRequest = async (request, response) => {
  const {lat, lon} = request.query;
  console.log(request.query);
  const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${process.env.WEATHER_API_KEY}`;
  console.log(url);
  try {
    const apiResults = await axios.get(url);
    const forecastData = apiResults.data.data.map(element => {
      let date = element.valid_date;
      let description = `Low of ${element.low_temp}, high of ${element.high_temp} with ${element.weather.description}`;
      console.log(date, description)
      return new Forecast(date, description);
    });
    console.log(forecastData);
    response.status(200).send(forecastData);
  } catch (event) {
    response.status(404).send('Nothing good');
  }
}

const handleMovieRequest = async (request, response) => {
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

app.get('/movies', handleMovieRequest);
app.get('/weather', handleWeatherRequest);
app.get('/*', (request, response) => response.status(404).send('No path.'));
app.listen(PORT, () => console.log('Weather Data Server is listening on port: ' + PORT));

