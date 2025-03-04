let n = parseInt(prompt("Nhập vào một số nguyên"));
let check = 0;
if (!Number.isNaN(n)) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            check += 1;
        }
    }
    if (check === 0) alert("Đây là số nguyên tố");
    else alert("Không phải số nguyên tố");
} else {
    alert("Đầu vào không hợp lệ");
}
