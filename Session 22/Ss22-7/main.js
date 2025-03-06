let a = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 2, 8, 3, 1, 4, 4];
a.sort((a, b) => a - b);
for (let i in a) {
    document.write(`${a[i]} `);
}
