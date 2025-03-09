let n = Number(prompt("Enter n"));
if (n === 0) {
    alert("Mảng không có phần tử");
} else if (n < 0) alert("Số lượng phần tử không được âm");
else {
    let a = [];
    for (let i = 0; i < n; i++) {
        a[i] = prompt(`Nhập phần tử thứ ${i + 1}`);
    }
    let index = 0,sum=0;
    for (let i of a) {
        if (i >= 0 && i.trim() != "") {
            index += 1;
            sum+=Number(i)
        }
    }
    if (index === 0) {
        document.writeln("Không có phần tử nào là số");
    }
    else{
        alert(`Tổng các kí tự là số : ${sum}`)
    }
}
