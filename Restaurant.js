'use strict'

module.exports = class Restaurant {
  constructor(restaurantObj, timestamp) {
    this.name = restaurantObj.name;
    this.image = restaurantObj.image_url;
    this.price = restaurantObj.price;
    this.rating = restaurantObj.rating;
    this.url = restaurantObj.url;
    this.timestamp = timestamp;
  }
}
