let a = [];
let n = 0;
let option;

do {
    option = Number(
        prompt(
            `================== MENU ===================\n
1. Nhập số phần tử cần nhập và giá trị các phần tử\n
2. In ra giá trị các phần tử đang quản lý\n
3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần\n
4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng\n
5. In ra các số nguyên tố trong mảng và tính tổng\n
6. Nhập một số và đếm số lần xuất hiện trong mảng\n
7. Thêm một phần tử vào vị trí chỉ định\n
8. Xóa một phần tử theo giá trị\n
9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần\n
0. Thoát\n
===========================================`
        )
    );

    if (option === 1) {
        n = Number(prompt("Nhập số phần tử:"));
        if (isNaN(n) || n <= 0) {
            alert("Vui lòng nhập số nguyên dương!");
        } else {
            a = [];
            for (let i = 0; i < n; i++) {
                a[i] = Number(prompt(`Nhập phần tử thứ ${i + 1}:`));
            }
        }
    } else if (option === 2) {
        if (a.length === 0) alert("Mảng chưa có dữ liệu!");
        else alert(`Các phần tử trong mảng: ${a.join(", ")}`);
    } else if (option === 3) {
        let evenNumbers = a.filter((num) => num % 2 === 0);
        let sum = evenNumbers.reduce((acc, num) => acc + num, 0);
        evenNumbers.sort((x, y) => y - x);
        alert(
            evenNumbers.length
                ? `Số chẵn: ${evenNumbers.join(", ")}\nTổng: ${sum}`
                : "Không có số chẵn trong mảng!"
        );
    } else if (option === 4) {
        if (a.length === 0) alert("Mảng chưa có dữ liệu!");
        else {
            let max = Math.max(...a);
            let min = Math.min(...a);
            let maxPos = a.indexOf(max);
            let minPos = a.indexOf(min);
            alert(
                `Giá trị lớn nhất: ${max} (Vị trí: ${maxPos})\nGiá trị nhỏ nhất: ${min} (Vị trí: ${minPos})`
            );
        }
    } else if (option === 5) {
        let sum = 0,
            primes = [];
        for (let i of a) {
            let isPrime = i > 1;
            for (let j = 2; j * j <= i; j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primes.push(i);
                sum += i;
            }
        }
        alert(
            primes.length
                ? `Số nguyên tố: ${primes.join(", ")}\nTổng: ${sum}`
                : "Không có số nguyên tố trong mảng!"
        );
    } else if (option === 6) {
        let x = Number(prompt("Nhập số cần đếm:"));
        let count = a.filter((num) => num === x).length;
        alert(`Số ${x} xuất hiện ${count} lần trong mảng.`);
    } else if (option === 7) {
        let value = Number(prompt("Nhập giá trị cần thêm:"));
        let index = Number(prompt(`Nhập vị trí muốn chèn (0 - ${a.length}):`));
        if (index < 0 || index > a.length) {
            alert("Vị trí không hợp lệ!");
        } else {
            a.splice(index, 0, value);
            alert(`Mảng sau khi thêm: ${a.join(", ")}`);
        }
    } else if (option === 8) {
        let value = Number(prompt("Nhập giá trị cần xóa:"));
        let newArray = a.filter((num) => num !== value);
        if (newArray.length === a.length) {
            alert(`Không tìm thấy phần tử ${value} trong mảng!`);
        } else {
            a = newArray;
            alert(`Mảng sau khi xóa: ${a.join(", ")}`);
        }
    } else if (option === 9) {
        let sortOption = Number(
            prompt("Chọn cách sắp xếp: 1 - Tăng dần, 2 - Giảm dần")
        );
        if (sortOption === 1) {
            a.sort((x, y) => x - y);
            alert(`Mảng sau khi sắp xếp tăng dần: ${a.join(", ")}`);
        } else if (sortOption === 2) {
            a.sort((x, y) => y - x);
            alert(`Mảng sau khi sắp xếp giảm dần: ${a.join(", ")}`);
        } else {
            alert("Lựa chọn không hợp lệ!");
        }
    } else if (option === 0) {
        alert("Thoát chương trình!");
    } else {
        alert("Lựa chọn không hợp lệ! Vui lòng nhập từ 0 - 9.");
    }
} while (option !== 0);
