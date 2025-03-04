let num = prompt("Nhập vào một chuỗi số nguyên");
let check = 0;
if (Number.isInteger(Number(num))) {
    for (let i = 0; i <= num.length / 2; i++) {
        if (num[i] === num[num.length - 1 - i]) check = 1;
        else {
            check = 0;
            break;
        }
    }
    if (check === 1) alert("Đây là số đối xứng");
    else alert("Đây không phải là số đối xứng");
} else alert("Invalid number !!!");
