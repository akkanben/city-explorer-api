# City Explorer API

**Author**: Ben Mils 
**Version**: 1.0.0

## Overview

This API goes with the [City Explorer]() and has been used to test out serving a .json weather data file as prepwork for connecting the City Explorer app to an external API.

## Getting Started

1. Clone down the repo.
2. Enter `cd city-explorer-api` & `npm install`.
3. Create an `.env` file directly inside of the "city-explorer-api" directory and add `PORT=your-prefered-local-port`.
4. Add API keys to `.env`: 
  - `WEATHER_API_KEY` uses an API key from [Weatherbit.io](https://www.weatherbit.io/)
  - `MOVIE_API_KEY` uses an API key from [The Movie DB](https://www.themoviedb.org/)
  - `YELP_API_KEY` uses an API key from [Yelp](https://www.yelp.com)
5. Start the server with `npm start`.

## Architecture

- HTML5, JavaScript
- Express
- Dotenv
- Cors
- [Axios](https://www.npmjs.com/package/axios)

## Change Log

11-02-2021 11:45PM - Application has working weather data and responds to correctly formatted urls at /weather.
11-03-2021 11:50PM - Application pulls live weather data and external movie data and servers to city explorer app. 
11-04-2021 08:15PM - Application refactored to move weather and movie functions to their own files.
11-05-2021 02:05PM - Application expanded to include local restaurants via Yelp API.
 

## Credit and Collaborations

Collaboration with [Scott Lease](https://github.com/scottie-l), [Joseph Streifel](https://github.com/jstreifel-33), [Minhang Xie](https://github.com/minxie97), [Raajvardhan Chaukulkar](https://github.com/raajv), for data flow planning and code reviews.

- [Client Server Data Flow](./public/images/lab_09-data-flow.png)
- [React App Data Tree](./public/images/react-component-flow.png)

## Time Estimates

| # | Feature Name                  | Estimated Time |  Start   | Finish  | Actual |
| - | ------------------------------| -------------- | -------- | ------- | ------ |
| 1 | Set up your Server Repository | 00:30          | 05:00PM  | 05:16PM | 00:16  |
| 2 | Weather                       | 02:00          | 07:20PM  | 11:45PM | 04:25  |
| 3 | Errors                        | 02:00          | 11:45PM  | 01:00AM | 01:45  |
| 4 | Weather (live)                | 02:00          | 04:45PM  | 06:30AM | 01:45  |
| 5 | Movies                        | 01:00          | 07:15PM  | 08:45AM | 01:30  |
| 6 | Publish                       | 00:30          | 11:30AM  | 11:50AM | 00:20  |
| 7 | Refactor                      | 00:30          | 08:00PM  | 08:15PM | 00:15  |
| 8 | Cache                         | 01:00          | 05:20PM  | 00:00PM | 00:00  |
| 9 | Restaurants                   | 01:30          | 12:30PM  | 02:30PM | 02:00  |
