let a = [];
let n = 0;
let option;

do {
    option = Number(
        prompt(
            `================== MENU ===================\n
1. Nhập số phần tử cần nhập và giá trị các phần tử\n
2. In ra giá trị các phần tử đang quản lý\n
3. In ra giá trị các phần tử chẵn và tính tổng\n
4. In ra giá trị lớn nhất và nhỏ nhất trong mảng\n
5. In ra các phần tử là số nguyên tố trong mảng và tính tổng\n
6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó\n
7. Thêm một phần tử vào vị trí chỉ định\n
8. Thoát\n
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
        let sum = 0,
            evenNumbers = [];
        for (let i of a) {
            if (i % 2 === 0) {
                evenNumbers.push(i);
                sum += i;
            }
        }
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
            alert(`Giá trị lớn nhất: ${max}\nGiá trị nhỏ nhất: ${min}`);
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
        alert("Thoát chương trình!");
    } else {
        alert("Lựa chọn không hợp lệ! Vui lòng nhập từ 1 - 8.");
    }
} while (option !== 8);
