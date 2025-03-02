let a = prompt("Enter a");
let b = prompt("Enter b");
let divide;
let calculation = prompt("Enter calculation (+,-,*,/)");
if (calculation === "+") {
  alert(a + " + " + b + "=" + (a + b));
} else if (calculation === "-") {
  alert(a + " - " + b + "=" + (a - b));
} else if (calculation === "*") {
  alert(a + " * " + b + "=" + a * b);
} else if (calculation === "/") {
  divide = a / b;
  divide = divide.toFixed(2);
  alert(a + " / " + b + "=" + divide);
} else {
  alert("Calculation does not exist !");
}
