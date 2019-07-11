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

  generateCustomersPerHour: function(min, max) {
    for(var i = 0; i < i < openHours.length; i++) {
      var randomCustomer = Math.floor(Math.random()*(max - min + 1) + min);
      this.customersPerHour.push(randomCustomer);
    }
  },

  generateCookiesPerHour: function() {
    for(var i = 0; i < openHours.length; i++) {
      var perHour = Math.floor(this.cookiesPerHour[i] * this.avgCookie);
      this.cookiesPerHour.push(perHour);

      this.totalCookies += perHour;
    }
  },

  postToPage: function() {
    var postToThePage = document.getElementById('pike');
    var containerEl = document.createElement('section');
    postToThePage.appendChild(containerEl);

    var headingEl = document.createElement('h1');
    headingEl.textContent = this.location;
    containerEl.appendChild(headingEl);
  },
};

store1.postToPage();


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

// var makeStoreAppearFunction = function() {
//   store1.render();
//   store2.render();
//   store3.render();
//   store4.render();
//   store5.render();
// };

// makeStoreAppearFunction();


