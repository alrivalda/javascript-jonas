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

class Car2 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car2('Ford', 120);

ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
Ev.prototype = Object.create(Car.prototype);

Ev.prototype.accelerate = function () {
  this.charge--;
  this.speed += 20;
  console.log(
    `${this.make} going at ${this.speed} km/h, with charge of ${this.charge}%`
  );
};

Ev.prototype.chargeTo = function (charge) {
  this.charge = charge;
};

Ev.prototype.constructor = Ev;
const tesla = new Ev('Tesla', 120, 23);

tesla.chargeTo(90);
tesla.brake();
tesla.accelerate();
