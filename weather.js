'use strict'

const axios = require('axios');
const Forecast = require('./Forecast');

const handleWeatherRequest = async (request, response) => {
  const {lat, lon} = request.query;
  const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${process.env.WEATHER_API_KEY}&days=3`;
  try {
    const apiResults = await axios.get(url);
    const forecastData = apiResults.data.data.map(element => {
      let date = element.valid_date;
      let description = `Low of ${element.low_temp}, high of ${element.high_temp} with ${element.weather.description}`;
      return new Forecast(date, description);
    });
    response.status(200).send(forecastData);
  } catch (event) {
    response.status(404).send('Nothing good');
  }
}

module.exports = handleWeatherRequest;
