let a = Number(prompt("Enter a"));
let b = Number(prompt("Enter b"));
let c = Number(prompt("Enter c"));
let max;
max = (max = a > b ? a : b) > c ? max : c;
alert(max)