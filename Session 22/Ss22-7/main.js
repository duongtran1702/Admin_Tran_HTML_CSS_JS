let a = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 2, 8, 3, 1, 4, 4];
let n = a.length;
for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
        if (a[j] > a[j + 1]) {
            let temp = a[j];
            a[j] = a[j + 1];
            a[j + 1] = temp;
        }
    }
}
for (let i in a) {
    document.write(`${a[i]} `);
}
