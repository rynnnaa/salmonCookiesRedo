'use strict';
var store = [];
var openHours = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM',];
var theTable = document.getElementById('sales-table');

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
    var randomCustomer = Math.floor(Math.random() * (max - min + 1) + min);
    this.customersPerHour.push(randomCustomer);
  }
};

Store.prototype.generateCookiesPerHour = function() {

  this.generateCustomersPerHour(this.min, this.max);
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


};

Store.prototype.render = function() {
  this.generateCustomersPerHour();
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);

  for(var i = 0; i < openHours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }

  var thEl = document.createElement('th');
  thEl.textContent = this.totalCookies;
  trEl.appendChild(thEl);
  theTable.appendChild(trEl);

};

new Store('1st and Pike', 23, 65, 6.3);
new Store('Sea-Tac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

function makeHeaderRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'locations';
  trEl.appendChild(thEl);
  console.log('Did I get here?');

  for(var i = 0; i < openHours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = openHours[i];
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Location Totals';
  trEl.appendChild(thEl);

  theTable.appendChild(trEl);
}
console.log('Did I get here?');

function makeFooterRow() {

}

function renderTable() {
  theTable.innerHTML = '';
  makeHeaderRow();
  for(var i = 0; i < store.length; i++) {
    store[i].render();
  }
  makeFooterRow();
}

renderTable();
console.log('HOW ABOUT nNOWWWWWWWWWWWWWWWWWWWW');




