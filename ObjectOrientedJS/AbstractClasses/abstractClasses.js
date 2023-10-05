var Person = {
  name: "None",
  email: "None",
  sendEmail: function () {
    console.log(`Mail sent to: ${this.name} / ${this.email}`);
  },
};

// var newPerson = new Person(); // Uncaught TypeError: Person is not a constructor

function Customer(name, email) {
  this.name = name;
  this.email = email;
  // Other staff
}

function Employee(name, email) {
  this.name = name;
  this.email = email;
  // Other staff
}

Customer.prototype = Person;
var newCustomer = new Customer("Engin", "engin@kodlama.io");
newCustomer.sendEmail();

Employee.prototype = Person;
var newEmployee = new Employee("Salih", "salih@kodlama.io");
newEmployee.sendEmail();
