var date = new Date();
var hour = date.getHours();

if (hour >= 5 && hour <= 11) {
  console.log("Good morning!");
} else if (hour > 11 && hour < 17) {
  console.log("Good afternoon!");
} else if (hour >= 17 && hour < 23) {
  console.log("Good evening!");
} else {
  console.log("Good night!");
}

var language = prompt("What is your language?");

switch (language) {
  case "tr":
    console.log("Turkish");
    break;
  case "fr":
    console.log("French");
    break;
  default:
    console.log("English");
    break;
}
