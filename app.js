'use strict';
var store = [];
var openHours = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM',];

function Store (location, min, max, avgCookie) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgCookie = avgCookie;
  this.cookiesPerHour = [];
  this.customersPerHour = [];
  this.totalCookies = 0;

  store.push(this);
  this.generateCustomersPerHour(this.min, this.max);
  this.generateCookiesPerHour();
  this.postToPage();
}

Store.prototype.generateCustomersPerHour = function(min, max) {
  for(var i = 0; i < openHours.length; i++) {
    console.log('THIS IS DOPE');
    var randomCustomer = Math.floor(Math.random() * (max - min + 1) + min);
    this.customersPerHour.push(randomCustomer);
  }
};

Store.prototype.generateCookiesPerHour = function() {

  this.generateCustomersPerHour(this.min, this.max);
  console.log('SUP');
  for(var i = 0; i < openHours.length; i++) {
    var perHour = Math.floor(this.customersPerHour[i] * this.avgCookie);
    this.cookiesPerHour.push(perHour);
    this.totalCookies += perHour;
  }
};

Store.prototype.postToPage = function() {

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
};

new Store('1st and Pike', 23, 65, 6.3);
new Store('Sea-Tac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);
