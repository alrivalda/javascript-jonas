'use strict';

// Construcor Function and the new Operator

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calAge = function () {....} -> bakal pengaruh ke performa karena ada redundan kode
};

const jonas = new Person('jonas', 1991);
const matilda = new Person('matilda', 2017);

// Proses
// 1. new -> membuat {} object kosong
// 2. function dipanggil, this merujuk ke {}
// 3. {} dihubungkan ke prototype
// 4. function mengembalikan {}

console.log(jonas instanceof Person);

// ---------------------PROTOTYPE-------------------

// Setiap fungsi di JS akan otomatis akan memiliki properti Prototype yang mengandung constructur functions
// Setiap objek yang dibuat dari constructor function akan mendapatkan semua akses method dan properties yang didefinisikan pada prototype property

console.log(Person.prototype);
// Person.prototype -> prototype default milik Person
// prototype ini digunakan untuk pewarisan oleh objek yang dibuat dari new
// Person.prototype.constructor akan kembali ke Person
// Person.prototype.calAge.constructor -> Function

// reuse this function, cuma 1 copy
Person.prototype.calAge = function () {
  console.log(2025 - this.birthYear);
};

console.log(Person.prototype.calAge.constructor);

jonas.calAge();

// prototype object akan sama dengan  prototype constructornya
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(Person)); // prototype di Person bukan milknya emlainkan akan dikasih ke object (prototype of linked project)
console.log(Person.prototype.isPrototypeOf(jonas));
