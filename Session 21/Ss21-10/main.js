let n;
do {
    n = Number(prompt("Enter an integer number"));
    if (Number.isNaN(n)) {
        alert("Invalid input!!!!");
    }
} while (Number.isNaN(n));
let check;
let index=0;
for (let i = 2; ; i++) {
    check=0;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) check += 1;
    }
    if (check === 0) {
        document.write(i + " ");
        index += 1;
    }
    if (index === n) {
        break;
    }
}