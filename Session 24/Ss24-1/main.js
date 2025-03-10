let option;
let n;
let a = [];
do {
    option = Number(
        prompt(`
    1. Nhập mảng\n
    2. Hiển thị mảng\n
    3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n
    4. Tính tổng các phần tử trong mảng\n
    5. Tìm số lần xuất hiện của một phần tử trong mảng\n
    6. Sắp xếp mảng tăng dần\n
    7. Thoát chương trình\n`)
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
        let min = Math.min(...a);
        alert(`Phần tử nhỏ nhất :${min}\nPhần tử lớn nhất:${max}`);
    } else if (option === 4) {
        let sum = 0;
        for (let i of a) {
            sum += Number(i);
        }
        alert(` Tổng các phần tử trong mảng :${sum}`);
    } else if (option === 5) {
        let result = "";
        let b = Array(100).fill(0);
        for (let i of a) {
            ++b[i];
        }
        for (let i in b) {
            
            if (b[i] > 0) {
                result += `Phần tử ${i} : ${b[i]} \n`;
            }
        }
        alert(`Số lần xuất hiện của một phần tử trong mảng :\n ${result}`);
    } else if (option === 6) {
        a.sort((a, b) => a - b);
        alert(`Mảng sau khi được sắp xếp :${a.join(" ")}`);
    }
} while (option !== 7);
