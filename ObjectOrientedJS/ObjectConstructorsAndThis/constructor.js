// This in a function inside an object
var student = {
  firstName: "Engin",
  lastName: "Demiroğ",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(student.getFullName());

// Object constructor
// this in an object
// PascalCase!!
function Customer(first, last, city, country, age) {
  this.first = first;
  this.last = last;
  this.city = city;
  this.country = country;
  this.age = age;
}
var newCustomer = new Customer("Engin", "Demiroğ", "Ankara", "Türkiye", 30); //aslında new Customer dediğimizde arkada Customer türünde bir nesne oluşuyor.
console.log(newCustomer.first);
console.log(newCustomer);
console.log(typeof newCustomer);
