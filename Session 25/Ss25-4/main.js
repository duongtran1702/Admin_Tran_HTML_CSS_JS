let input = Number(prompt("Nhập vào số nguyên dương"));
function prime(input) {
    if (!Number(isNaN(input))) {
        if (input < 2) {
            return 0;
        }
        for (let i = 2; i <= Math.sqrt(input); i++) {
            if (input % i === 0) return 0;
        }
        return 1;
    } else return -1;
}
if(prime(input)===1) alert("là số nguyên tố")
    else if(prime(input)===0)alert("Không là số nguyên tố")
else alert("Dữ liệu không hợp lệ")
