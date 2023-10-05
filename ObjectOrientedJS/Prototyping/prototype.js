function Customer(first, last, city, country, age) {
  this.first = first;
  this.last = last;
  this.city = city;
  this.country = country;
  this.age = age;
}
var newCustomer = new Customer("Engin", "Demiroğ", "Ankara", "Türkiye", 30);

Customer.prototype.email = "engin@kodlama.io";
Customer.prototype.getFullName = function () {
  return `${this.first} ${this.last}`;
};

console.log(newCustomer.city);
console.log(newCustomer.email);
console.log(newCustomer.getFullName());
