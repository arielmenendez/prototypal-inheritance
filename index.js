// function Vehicle(brand) {
//   this.brand = brand;
// }

// Vehicle.prototype.information = function () {
//   return `Vehicle brand: ${this.brand}`;
// };

// function Car(brand, model) {
//   Vehicle.call(this, brand);
//   this.model = model;
// }

// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;

// Car.prototype.showModel = function () {
//   return `Car model: ${this.model}`;
// };

// let myCar = new Car('Tesla', 'Model Y');
// console.log(myCar.showModel());
// console.log(myCar.information());

function User(name, email) {
  this.name = name;
  this.email = email;
}

User.prototype.information = function () {
  return `Name: ${this.name}, Email: ${this.email}`;
};

function Administrator(name, email) {
  User.call(this, name, email);
}

Administrator.prototype = Object.create(User.prototype);
Administrator.prototype.costructor = Administrator;

Administrator.prototype.totalAccess = function () {
  return `The user ${this.name} has total access to the system`;
};

function Moderator(name, email) {
  User.call(this, name, email);
}

Moderator.prototype = Object.create(User.prototype);
Moderator.prototype.constructor = Moderator;

Moderator.prototype.moderateContent = function () {
  return `The user ${this.name} can moderate content`;
};

let admin = new Administrator('Alice', 'alice@example.com');
let mod = new Moderator('Bob', 'bob@example.com');

console.log(admin.information());
console.log(mod.information());

console.log(admin.totalAccess());
console.log(mod.moderateContent());

let user = new User('Ariel', 'arielmenendez19@gmail.com');

console.log(user.information());
