'use strict';

var openHours = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM',];

var store1 = {
  location: '1st and Pike',
  min: 23,
  max: 65,
  avgCookie: 6.3,
  cookiesPerHour: [],
  customersPerHour: [],
  totalCookies: 0,
  addCustomersPerHour: function() {
    for(var i = 0; i < i < openHours.length; i++) {
      var randomCustomer = Math.floor((Math.random()*(this.max - this.min + 1) + min);
      store1.addcustomersPerHour.push(randomCustomer)
    }
  }
};

store1.averageCookiesPerCustomer();


var store2 = {
  location: 'Seatac Airport',
  min: 3,
  max: 24,
  AvgCookie: 1.2
};

var store3 = {
  name: 'Seattle Center',
  min: 11,
  max: 38,
  avgCookie: 3.7
};

var store4 = {
  name: 'Capitol Hill',
  min: 20,
  max: 38,
  avgCookie: 2.3
};

var store5 = {
  name: 'Alki',
  min: 2,
  max: 16,
  avgCookie: 4.6,
};

var makeStoreAppearFunction = function() {
  store1.render();
  store2.render();
  store3.render();
  store4.render();
  store5.render();
};

makeStoreAppearFunction();


