let n = Number(prompt("Enter n"));
if (n === 0) {
    alert("Không phải dãy số fibonacci");
} else if (n < 0) alert("Số lượng phần tử không được âm");
else {
    let a = [];
    for (let i = 0; i < n; i++) {
        a[i] = Number(prompt(`Nhập phần tử thứ ${i + 1}`));
    }
    let check = 1;
    for (let i = 2; i < n; i++) {
        let temp=a[i - 1] + a[i - 2]
        if (a[i] !==temp ) {
            check = 0;
            break;
        }
    }
    if (check === 0) {
        alert("Không phải dãy số fibonacci");
    } else {
        alert("Là dãy số fibonacci");
    }
}
