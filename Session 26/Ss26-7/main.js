let a = [];
for (let i = 0; i < 10; i++) {
    a[i] = Number(prompt(`Nhập phần tử thứ ${i + 1}`));
}
let b = a.filter((temp) => temp % 2 === 0).map((temp) => Math.pow(temp, 2));
if(b.length!==0){
    alert(`${b.join(" ")}`)
}else{
    alert("Mảng không có dữ liệu")
}