var customer = {
  id: 1,
  contactName: "Engin Demiroğ",
};

customer.country = "Turkey";

customer.sayHi = function () {
  console.log("Hi " + this.contactName);
};

customer.sayHi();

console.log(customer);
