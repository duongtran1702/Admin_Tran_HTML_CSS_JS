let a, b, c;

do {
    a = Number(prompt("Enter a"));
    b = Number(prompt("Enter b"));
    c = Number(prompt("Enter c"));
} while (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c));

if (a == 0 && b == 0 && c == 0) {
    alert("Vô số nghiệm");
} else if (a == 0 && b == 0 && c != 0) alert("Vô nghiệm");
else if (a == 0 && b != 0) {
    let x = -c / b;
    alert("x = " + x);
} else {
    let delta = Math.pow(b, 2) - 4 * a * c;
    let x1 = delta >= 0 ? (-b + Math.sqrt(delta)) / (2 * a) : "vo nghiem";
    let x2 = delta >= 0 ? (-b - Math.sqrt(delta)) / (2 * a) : "vo nghiem";
    alert("x1 = " + x1 + "\n" + "x2 = " + x2);
}
