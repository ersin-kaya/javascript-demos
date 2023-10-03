// for (var i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (var i = 0; i <= 10; i++) {
//   if (i == 3) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }

// var number = 1;
// while (number < 10) {
//   console.log(number);
//   number += 1;
// }

var age = 0;
var result = "";

do {
  result += age;
  result += "-";
  age--;
} while (age > 0);
console.log(result);
