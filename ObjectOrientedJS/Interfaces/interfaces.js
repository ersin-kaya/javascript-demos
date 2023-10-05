// interface olarak sendEmail metodunu değil, personInterface parametresini planlıyoruz. sendEmail ara sınıf gibi düşünülebilir, bu ara sınıfa yani aslında bir metoda interface'i monte ediyoruz....
// implemente edecek sınıflarda name ve email parametrelerinin aynı olması önemli!

function sendEmail(personInterface) {
  var to = personInterface.email;
  var name = personInterface.name;

  var send = function () {
    console.log(`Mail sent to: ${name} / ${to}`);
  };

  send();
}

function Customer(name, email) {
  this.name = name;
  this.email = email;
  // Other staff
}

function Employee(name, email, salary) {
  this.name = name;
  this.email = email;
  var salary = salary;
  //   Other staff
}

var newCustomer = new Customer("Engin", "engin@kodlama.io");
var newEmployee = new Employee("Salih", "salih@kodlama.io");

console.log(newCustomer);
console.log(newEmployee);

sendEmail(newCustomer);
sendEmail(newEmployee);
