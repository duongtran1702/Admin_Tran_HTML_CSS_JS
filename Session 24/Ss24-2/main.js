let option;
let n;
let a = [];
do {
    option = Number(
        prompt(`
    1. Nhập mảng số nguyên\n
    2. Hiển thị mảng\n
    3. Tìm các phần tử chẵn và lẻ\n
    4. Tính trung bình cộng của mảng\n
    5. Xóa phần tử tại vị trí chỉ định\n
    6. Tìm phần tử lớn thứ hai trong mảng\n
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
        let even = "",
            odd = "";
        for (let i of a) {
            if (i % 2 === 0) {
                even += `${i} `;
            } else odd += `${i} `;
        }

        alert(`Phần tử chẵn :${even}\nPhần tử lẻ :${odd}`);
    } else if (option === 4) {
        let sum = 0;
        for (let i of a) {
            sum += Number(i);
        }
        alert(` Trung bình cộng các phần tử trong mảng :${sum / n}`);
    } else if (option === 5) {
        let index = Number(prompt("Nhập vị trí:"));
        a.splice(index, 1);
        alert(`${a.join(" ")}`)
    } else if (option === 6) {
        let max = Math.max(...a);
        let max_2 = -100;
        for (let i of a) {
            if (i < max && max_2 < i) {
                max_2 = i;
            }
        }
        alert(max_2);
    }
} while (option !== 7);
