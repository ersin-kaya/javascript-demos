// Object Constructor
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  var age = age;
}

function Student(favoriteCourse) {
  this.favoriteCourse = favoriteCourse;
}

Student.prototype = new Person("Engin", "Demiroğ", 30);
// Student.prototype = new Person();

var engin = new Student("Programming");

console.log(
  `${engin.firstName} ${engin.lastName} (${engin.age}) loves ${engin.favoriteCourse}`
);

console.log(engin);
