let n;
do {
    n = Number(prompt("Enter an integer number"));
    if (Number.isNaN(n)) {
        alert("Invalid input!!!!");
    }
} while (Number.isNaN(n));
let check = 0;
for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
        check += 1;
    }
}
if (check === 0) alert("Đây là số nguyên tố");
else alert("Không phải số nguyên tố");
