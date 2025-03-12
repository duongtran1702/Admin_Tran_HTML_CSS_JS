let a = [];
for (let i = 0; i < 10; i++) {
    a[i] = prompt(`Nhập phần tử thứ ${i + 1}`);
}
function isPrime(input) {
    if (input < 3) return 0;
    for (let i = 2; i <= Math.sqrt(input); i++) {
        if (input % i === 0) return 0;
    }
    return 1;
}
function sangSNT(a) {
    a = a.filter((temp) => temp.trim() !== "");
    if (a.length === 0) {
        alert("Mảng không có dữ liệu");
        return;
    }
    let b = a.map(Number);
    b = b.filter((temp) => isPrime(temp) && !Number.isNaN(temp));
    alert(`${b.join(" ")}`);
}
