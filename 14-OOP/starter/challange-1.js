'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const BMW = new Car('BMW', 120);
const Mercy = new Car('Mercedez', 95);

BMW.accelerate;
BMW.accelerate;
BMW.brake;
BMW.accelerate;
