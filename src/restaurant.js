/* eslint-disable max-len */

let restaurant = {};

const orderFromMenu = (request) => {
  restaurant.consumption.push(request);
};

const payForConsumption = () => {
  let sum = 0;
  for(const item of restaurant.consumption){
    if(restaurant.fetchMenu.food[item]) sum+=restaurant.fetchMenu.food[item];
    if(restaurant.fetchMenu.drink[item]) sum+=restaurant.fetchMenu.drink[item];
  }
  return (sum*1.1).toPrecision(2);
}

const createMenu = (menu) => {
  restaurant.fetchMenu = menu;
  restaurant.consumption = [];
  restaurant.order = orderFromMenu;
  restaurant.pay = payForConsumption;

  return restaurant;
};

module.exports = createMenu;
