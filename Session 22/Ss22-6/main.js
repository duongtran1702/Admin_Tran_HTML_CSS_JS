let a = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 2, 8, 3, 1, 4, 4];
let b = new Array(100).fill(0);
for (let i of a) {
    b[i]++;
}
let num=parseInt(prompt("Enter a number"))
document.write(`Số ${num} xuất hiện ${b[num]} trong mảng <br>`);

