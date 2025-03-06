let a = [1, 1, 2, 3, 4, 3, 4, 5, 6, 6];
let b = new Array(100).fill(0);
let count = 0;
for (let i of a) {
    ++b[i];
    if (b[i] > count) {
        count = b[i];
    }
}
document.write("Phần tử xuất hiện nhiều nhất là : ");
for (let i in a) {
    if (b[i] === count) {
        document.write(`${i}`);
        break;
    }
}
