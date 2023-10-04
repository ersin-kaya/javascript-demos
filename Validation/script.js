const resultSection = document.getElementById("result");

function validate() {
  var value = document.getElementById("testInput");
  if (value.checkValidity() == false) {
    resultSection.innerHTML = value.validationMessage;
  } else {
    resultSection.innerHTML = "Input OK";
  }
}
