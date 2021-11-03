'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const weatherData = require('./data/weather.json');
const Forcast = require('./Forcast');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

const handleWeatherRequest = (request, response) => {
  console.log('Got a request.');
  console.log(request.query);
  const data = weatherData.find(element => element.lon.toString() === request.query.lon && element.lat.toString() === request.query.lat && element.city_name.toLowerCase() === request.query.city_name);
  console.log(data);
  if (data) {
    const forcastData = data.data.map(element => {
      let date = element.valid_date;
      let description = `Low of ${element.high_temp}, high of ${element.low_temp} with ${element.weather.description}`;
      return new Forcast(date, description);
    });
    response.status(200).send(forcastData);
  } else {
    response.status(404).send('Sorry, I got nothing.');
  }
}

app.get('/weather', handleWeatherRequest);

app.listen(PORT, () => console.log('Weather Data Server is listening on port: ' + PORT));

