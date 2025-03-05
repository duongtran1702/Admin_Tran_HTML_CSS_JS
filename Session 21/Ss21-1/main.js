let total = 0;
for (let i = 0; i < 5; i++) {
    let a = +prompt(`Nhập vào số nguyên thứ ${i + 1}:`);
    if (a % 2 !== 0) {
        total += a;
    }
}
document.write(`Tổng các số lẻ là : ${total}`);
