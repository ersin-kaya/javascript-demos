// Class members --> Constructors, Fields(Public or Private), Functions, static members

function Customer(firstName, lastName) {
  this.firstName = firstName; // Public field
  this.lastName = lastName;

  var someField = "some value"; // Private field

  this.sendProduct = function () {
    console.log("Product sent!");
  }; // Operation
}

var engin = new Customer("Engin", "Demiroğ"); //Constructor
console.log(engin.firstName);
console.log(engin.someField); // undefined
engin.sendProduct();
