'use strict'

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const handleWeatherRequest = require('./weather');
const handleMovieRequest = require('./movies.js');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());

app.get('/movies', handleMovieRequest);
app.get('/weather', handleWeatherRequest);
app.get('/*', (request, response) => response.status(404).send('No path.'));

app.listen(PORT, () => console.log('Weather Data Server is listening on port: ' + PORT));

