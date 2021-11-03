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
  const data = weatherData.find(element => {
    return (
      element.lon.toString().slice(0, element.lon.toString().indexOf('.') + 2) === request.query.lon &&
      element.lat.toString().slice(0, element.lat.toString().indexOf('.') + 2) === request.query.lat &&
      element.city_name.toLowerCase().split(',')[0] === request.query.city_name
    )
  });
  if (data) {
    const forcastData = data.data.map(element => {
      let date = element.valid_date;
      let description = `Low of ${element.high_temp}, high of ${element.low_temp} with ${element.weather.description}`;
      return new Forcast(date, description);
    });
    response.status(200).send(forcastData);
  } else {
    throw new Error('Broken')
    //response.status(500).send('Pretty bad stuff.');
    //response.status(404).send('Sorry, I got nothing.');
  }
}

app.get('/weather', handleWeatherRequest);

app.listen(PORT, () => console.log('Weather Data Server is listening on port: ' + PORT));

