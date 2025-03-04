let a = 0;
let b = 1;
let n = parseInt(prompt("Nhập vào n"));
if (!Number.isNaN(n) && n > 0) {
    for (let i = 0; i < n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
        document.write(a + " ");
    }
}
else{
    alert("Không hợp lệ !!!")
}
