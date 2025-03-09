let n = Number(prompt("Enter n"));
if (n === 0) {
    alert("Mảng không có phần tử");
} else if (n < 0) alert("Số lượng phần tử không được âm");
else {
    let a = [];
    for (let i = 0; i < n; i++) {
        a[i] = Number(prompt(`Nhập phần tử thứ ${i + 1}`));
    }
    let max_1=a[0];
    let max_2=max_1-1;
    for (let i of a) {
        if(max_1<i&&!Number.isNaN(i)){
            max_2=max_1;
            max_1=i;
            
        }
    }
    alert(`${max_2}`)
}
