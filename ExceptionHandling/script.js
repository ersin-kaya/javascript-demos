function myFunction() {
  const message = document.getElementById("message");
  message.innerHTML = "";
  let x = document.getElementById("input").value;
  try {
    if (x.trim() == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 3) throw "too low";
    if (x > 9) throw "too high";
  } catch (err) {
    message.innerHTML = "Input is " + err;
  }
}
