'use strict';

// Construcor Function and the new Operator

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calAge = function () {....}
};

const jonas = new Person('jonas', 1991);
