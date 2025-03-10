let option;
let n;
let a = [];
do {
    option = Number(
        prompt(`
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
4. Tính tổng và trung bình cộng của các số dương trong mảng
5. Đảo ngược mảng
6. Kiểm tra mảng có đối xứng không
7. Thoát chương trình`)
    );
    if (option === 1) {
        n = Number(prompt("Nhập số phần tử:"));
        if (isNaN(n) || n <= 0) {
            alert("Vui lòng nhập số nguyên dương!");
        } else {
            for (let i = 0; i < n; i++) {
                a[i] = Number(prompt(`Nhập phần tử thứ ${i + 1}:`));
            }
        }
    } else if (option === 2) {
        if (a.length === 0) alert("Mảng chưa có dữ liệu!");
        else alert(`Các phần tử trong mảng: ${a.join(" ")}`);
    } else if (option === 3) {
        let max = Math.max(...a);
        let maxPos = a.indexOf(max);
        alert(`Phần tử lớn nhất : ${max}\nVị trí : ${maxPos}`);
    } else if (option === 4) {
        let sum = 0;
        for (let i of a) {
            if (Number(i) > 0) sum += Number(i);
        }
        alert(` Trung bình cộng các phần tử trong mảng :${sum / n}`);
    } else if (option === 5) {
        a.reverse();
        alert(`Các phần tử trong mảng sau khi được đảo ngược: ${a.join(" ")}`);
    } else if (option === 6) {
        let check = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== a[a.length - 1 - i]) {
                check = 1;
                break;
            }
        }
        if (check === 0) alert("Mảng đối xứng");
        else alert("Mảng không đối xứng");
    }
} while (option !== 7);
