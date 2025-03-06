let a = [3, 4, 5, 6, 7];
let sum_odd = 0,
    sum_even = 0;
for (let i in a) {
    if (a[i] % 2 === 0) {
        sum_even += a[i];
    } else sum_odd += a[i];
}
document.write(
    `Tổng các số chẵn : ${sum_even} <br> Tổng các số lẻ : ${sum_odd}`
);
