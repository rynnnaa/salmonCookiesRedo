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
    for(var i = 0; i < openHours.length; i++) {
      console.log('THIS IS DOPE');
      var randomCustomer = Math.floor(Math.random() * (max - min + 1) + min);
      this.customersPerHour.push(randomCustomer);
    }
    console.log(this.customersPerHour);
  },

  generateCookiesPerHour: function() {

    this.generateCustomersPerHour(this.min, this.max);
    console.log('SUP');
    for(var i = 0; i < openHours.length; i++) {
      var perHour = Math.floor(this.customersPerHour[i] * this.avgCookie);
      this.cookiesPerHour.push(perHour);
      this.totalCookies += perHour;
    }
  },

  postToPage: function() {

    this.generateCookiesPerHour();
    var postToThePage = document.getElementById('pike');
    var containerEl = document.createElement('section');
    postToThePage.appendChild(containerEl);

    var headingEl = document.createElement('h1');
    headingEl.textContent = this.location;
    containerEl.appendChild(headingEl);

    var ulEl = document.createElement('ul');

    for(var i = 0; i < openHours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${openHours[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);

      containerEl.appendChild(ulEl);
      postToThePage.appendChild(containerEl);
    }

    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.totalCookies} cookies`;
    ulEl.appendChild(totalEl);

  },
};

var store2 = {
  location: 'Seatac Airport',
  min: 3,
  max: 24,
  avgCookie: 1.2,
  cookiesPerHour: [],
  customersPerHour: [],
  totalCookies: 0,

  generateCustomersPerHour: function(min, max) {
    for(var i = 0; i < openHours.length; i++) {
      console.log('THIS IS DOPE');
      var randomCustomer = Math.floor(Math.random() * (max - min + 1) + min);
      this.customersPerHour.push(randomCustomer);
    }
    console.log(this.customersPerHour);
  },

  generateCookiesPerHour: function() {

    this.generateCustomersPerHour(this.min, this.max);
    console.log('SUP');
    for(var i = 0; i < openHours.length; i++) {
      var perHour = Math.floor(this.customersPerHour[i] * this.avgCookie);
      this.cookiesPerHour.push(perHour);
      this.totalCookies += perHour;
    }
  },

  postToPage: function() {

    this.generateCookiesPerHour();
    var postToThePage = document.getElementById('pike');
    var containerEl = document.createElement('section');
    postToThePage.appendChild(containerEl);

    var headingEl = document.createElement('h1');
    headingEl.textContent = this.location;
    containerEl.appendChild(headingEl);

    var ulEl = document.createElement('ul');

    for(var i = 0; i < openHours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${openHours[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);

      containerEl.appendChild(ulEl);
      postToThePage.appendChild(containerEl);
    }

    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.totalCookies} cookies`;
    ulEl.appendChild(totalEl);

  },
};
var store3 = {
  location: 'Seattle Center',
  min: 11,
  max: 38,
  avgCookie: 3.7,
  cookiesPerHour: [],
  customersPerHour: [],
  totalCookies: 0,

  generateCustomersPerHour: function(min, max) {
    for(var i = 0; i < openHours.length; i++) {
      console.log('THIS IS DOPE');
      var randomCustomer = Math.floor(Math.random() * (max - min + 1) + min);
      this.customersPerHour.push(randomCustomer);
    }
    console.log(this.customersPerHour);
  },

  generateCookiesPerHour: function() {

    this.generateCustomersPerHour(this.min, this.max);
    console.log('SUP');
    for(var i = 0; i < openHours.length; i++) {
      var perHour = Math.floor(this.customersPerHour[i] * this.avgCookie);
      this.cookiesPerHour.push(perHour);
      this.totalCookies += perHour;
    }
  },

  postToPage: function() {

    this.generateCookiesPerHour();
    var postToThePage = document.getElementById('pike');
    var containerEl = document.createElement('section');
    postToThePage.appendChild(containerEl);

    var headingEl = document.createElement('h1');
    headingEl.textContent = this.location;
    containerEl.appendChild(headingEl);

    var ulEl = document.createElement('ul');

    for(var i = 0; i < openHours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${openHours[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);

      containerEl.appendChild(ulEl);
      postToThePage.appendChild(containerEl);
    }

    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.totalCookies} cookies`;
    ulEl.appendChild(totalEl);

  },
};

var store4 = {
  location: 'Capitol Hill',
  min: 20,
  max: 38,
  avgCookie: 2.3,
  cookiesPerHour: [],
  customersPerHour: [],
  totalCookies: 0,

  generateCustomersPerHour: function(min, max) {
    for(var i = 0; i < openHours.length; i++) {
      console.log('THIS IS DOPE');
      var randomCustomer = Math.floor(Math.random() * (max - min + 1) + min);
      this.customersPerHour.push(randomCustomer);
    }
    console.log(this.customersPerHour);
  },

  generateCookiesPerHour: function() {

    this.generateCustomersPerHour(this.min, this.max);
    console.log('SUP');
    for(var i = 0; i < openHours.length; i++) {
      var perHour = Math.floor(this.customersPerHour[i] * this.avgCookie);
      this.cookiesPerHour.push(perHour);
      this.totalCookies += perHour;
    }
  },

  postToPage: function() {

    this.generateCookiesPerHour();
    var postToThePage = document.getElementById('pike');
    var containerEl = document.createElement('section');
    postToThePage.appendChild(containerEl);

    var headingEl = document.createElement('h1');
    headingEl.textContent = this.location;
    containerEl.appendChild(headingEl);

    var ulEl = document.createElement('ul');

    for(var i = 0; i < openHours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${openHours[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);

      containerEl.appendChild(ulEl);
      postToThePage.appendChild(containerEl);
    }

    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.totalCookies} cookies`;
    ulEl.appendChild(totalEl);

  },
};

var store5 = {
  location: 'Alki',
  min: 2,
  max: 16,
  avgCookie: 4.6,
  cookiesPerHour: [],
  customersPerHour: [],
  totalCookies: 0,

  generateCustomersPerHour: function(min, max) {
    for(var i = 0; i < openHours.length; i++) {
      console.log('THIS IS DOPE');
      var randomCustomer = Math.floor(Math.random() * (max - min + 1) + min);
      this.customersPerHour.push(randomCustomer);
    }
    console.log(this.customersPerHour);
  },

  generateCookiesPerHour: function() {

    this.generateCustomersPerHour(this.min, this.max);
    console.log('SUP');
    for(var i = 0; i < openHours.length; i++) {
      var perHour = Math.floor(this.customersPerHour[i] * this.avgCookie);
      this.cookiesPerHour.push(perHour);
      this.totalCookies += perHour;
    }
  },

  postToPage: function() {

    this.generateCookiesPerHour();
    var postToThePage = document.getElementById('pike');
    var containerEl = document.createElement('section');
    postToThePage.appendChild(containerEl);

    var headingEl = document.createElement('h1');
    headingEl.textContent = this.location;
    containerEl.appendChild(headingEl);

    var ulEl = document.createElement('ul');

    for(var i = 0; i < openHours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${openHours[i]}: ${this.cookiesPerHour[i]} cookies`;
      ulEl.appendChild(liEl);

      containerEl.appendChild(ulEl);
      postToThePage.appendChild(containerEl);
    }

    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.totalCookies} cookies`;
    ulEl.appendChild(totalEl);

  },
};
store1.postToPage();
store2.postToPage();
store3.postToPage();
store4.postToPage();
store5.postToPage();
