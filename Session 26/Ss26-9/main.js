let a = [];
for (let i = 0; i < 10; i++) {
    a[i] = prompt(`Nhập phần tử thứ ${i + 1}`);
}
function sum(a) {
    a = a.filter((temp) => temp.trim() !== "");
    if (a.length === 0) {
        alert("Mảng không có dữ liệu");
        return;
    }
    let b = a.map(Number).filter((temp) => !Number.isNaN(temp));
    let totalEven = b.reduce(
        (acc, cur) => (cur % 2 === 0 ? acc + cur : acc),
        0
    );
    let totalOdd = b.reduce((acc, cur) => (cur % 2 !== 0 ? acc + cur : acc), 0);
    alert(`totalEven=${totalEven}\ntotalOdd=${totalOdd}`);
}
sum(a);
