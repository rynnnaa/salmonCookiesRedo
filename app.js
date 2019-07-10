'use strict';

var store1 = {
  location: '1st and Pike',
  min: 23,
  max: 65,
  AvgCookie: 6.3,
  openHours: [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm'
  ],

};

var store2 = {
  location: 'Seatac Airport',
  min: 3,
  max: 24,
  AvgCookie: 1.2,
  openHours: [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm'
  ],
};

var store3 = {
  name: 'Seattle Center',
  min: 11,
  max: 38,
  avgCookie: 3.7,
  openHours: [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm'
  ],

};

var store4 = {
  name: 'Capitol Hill',
  min: 20,
  max: 38,
  avgCookie: 2.3,
  openHours: [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm'
  ],
};

var store5 = {
  name: 'Alki',
  min: 2,
  max: 16,
  avgCookie: 4.6,
  openHours: [
    '6am',
    '7am',
    '8am',
    '9am',
    '10am',
    '11am',
    '12pm',
    '1pm',
    '2pm',
    '3pm',
    '4pm',
    '5pm',
    '6pm',
    '7pm',
    '8pm'
  ],
};

var makeStoreAppearFunction = function() {
  store1.render();
  store2.render();
  store3.render();
  store4.render();
  store5.render();
};

makeStoreAppearFunction();

var getStoreInfo = document.getElementById('name');
var createUL = document.createElement('ul');
createUL.textContent('Car');
getStoreInfo.appendChild(createUL);


