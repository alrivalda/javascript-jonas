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
// 3. {} dihubungkan ke prototype nya constructor
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

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.hasOwnProperty('species'));

// Recap
// Constructor function memiliki prototype property  -> dimana diisi methods
// prototype punya reference back yaitu .constructor
// prototype bukan Person melainkan objek yang dibuat dari Person
// setelah objek dibuat, dihubungkan dengan prototype dengan __proto__
// prototype chain -> object -> prototype -> object.prototype -> null
// jika tidak ada di proto typesebelumnya akan terus mencari sampao object.prototype
console.log(jonas.__proto__);
// Object
console.log(jonas.__proto__.__proto__);

//Null
console.log(jonas.__proto__.__proto__.__proto__);

///--------------------ES6  Classes --------------------------

// class expressions class masih functions
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // diluar constructor akan ada di .prototype
  calAge() {
    console.log(2025 - this.birthYear);
  }

  // ada methods dan properti di akhir
  get age() {
    return 2025 - this.birthYear;
  }

  //set properti yang sudah ada
  set fullName(name) {
    if (name.include(' ')) this._fullName = name;
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.loh('Hey');
  }
}

const jessica = new PersonCl('jessica', 1996);

PersonCl.prototype.greet = function () {
  console.log(`hi ${this.firstName}`);
};

jessica.greet();

// 1. kelas tidak diangkat atau tidak bisa digunakan sebelum dideklarasikan
// 2. first class citizen -> dapat digunakan untuk pass dan return di fungsi
// 3. body class selalu di eksekusi di mode strict

const account = {
  owner: 'jonas',
  mov: [5, 62, 46, 46],

  get latest() {
    return this.mov.slice(-1).pop();
  },

  set latest(mov) {
    this.mov.push(mov);
  },
};

account.latest;
account.latest = 50;

// Static Methods
// ex Array.from() berada di constructor, bukan di prototype

Person.hey = function () {
  console.log('Hey');
};

Person.hey();

// jonas.hey() -> eror karena tidak mewarisi

// ------------- Object.create() --------------
const PersonProto = {
  calAge() {
    console.log(2025 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto); // Empty Object yang dihubungkan dengan PersonProto prototype
steven.name = 'Steven';
steven.birthYear = '2998';
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2003);

////////////// inheritance Constructor

/** 
const Student = function (firstName, birthYear, course) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.course = course;
};

*/

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Student.prototype = Person.prototype ini error karena akan overwrite
Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(`Hei, my name is ${this.firstName} and I Study ${this.course}`);
};

Student.prototype.constructor = Student;
const mike = new Student('Mike', 2020, 'Math');
mike.introduce();
