'use strict'

module.exports = class Forecast {
  constructor(forcastObj, timestamp) {
    this.date = forcastObj.valid_date;
    this.description = `Low of ${forcastObj.low_temp}, high of ${forcastObj.high_temp} with ${forcastObj.weather.description}`;
    this.timestamp = timestamp;
    this.icon = `https://www.weatherbit.io/static/img/icons/${forcastObj.weather.icon}.png`
  }
}

