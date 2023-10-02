// function signature
function functionName(parameter1, parameter2) {
  //do something
  return parameter1 * parameter2;
}
console.log(functionName(2, 3));

// function without 'return'
function functionWithoutReturn(parameter1, parameter2) {
  console.log("This is a function without 'return' statement");
}
functionWithoutReturn();

// parameter defaults
function functionName2(x, y) {
  if (y === undefined) {
    y = 0;
  }
}
functionName2(3);

// the arguments object
maximum = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  var i,
    max = 0;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(maximum);
