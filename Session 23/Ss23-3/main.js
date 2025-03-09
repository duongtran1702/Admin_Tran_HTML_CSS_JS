let n = Number(prompt("Enter n"));
let a = [];
for (let i = 0; i < n; i++) {
    a[i] = Number(prompt(`Nhập phần tử thứ ${i + 1}`));
}
console.log(a);

let count=0;
for (let i of a) {
    if (Number.isInteger(i) && i < 0) {
        count += 1;
    }
}
alert(count)
