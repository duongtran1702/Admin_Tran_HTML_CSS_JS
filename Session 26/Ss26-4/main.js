let a = prompt("Nhập vào một mảng số").split(" ");
a = a.map(Number);
function isPrime(input) {
    if (input < 2) return 0;
    for (let i = 2; i <= Math.sqrt(input); i++) {
        if (input % i === 0) return 0;
    }
    return 1;
}
function sangSNT(input) {
    let a = input.filter((temp) => isPrime(temp));
    alert(`${a.join(" ")}`);
}
sangSNT(a)