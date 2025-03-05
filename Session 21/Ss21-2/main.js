let even=0,odd=0;
for (let i = 0; i < 5; i++) {
    let a = +prompt(`Nhập vào số nguyên thứ ${i + 1}:`);
    if (a % 2 === 0) {
        even += 1;
    }
    else odd+=1
}
document.write(`Số lượng số chẵn là: ${even}<br>
    Số lượng số lẻ là :${odd}`);
