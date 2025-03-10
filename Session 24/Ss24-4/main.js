let option;
let rows, cols;
let a = [];

do {
    option = Number(
        prompt(`
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát chương trình`)
    );

    if (option === 1) {
        rows = Number(prompt("Nhập số hàng:"));
        cols = Number(prompt("Nhập số cột:"));
        a = [];

        for (let i = 0; i < rows; i++) {
            a[i] = [];
            for (let j = 0; j < cols; j++) {
                a[i][j] = Number(
                    prompt(`Nhập phần tử ở hàng ${i + 1}, cột ${j + 1}:`)
                );
            }
        }
    } else if (option === 2) {
        let result = "";
        for (let i in a) {
            result += `\n${a[i].join("  ")}`;
        }
        alert("Mảng 2 chiều:\n" + result);
    } else if (option === 3) {
        let sum = 0;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j< cols; j++) {
                sum += a[i][j];
            }
        }
        alert(`Tổng các phần tử trong mảng : ${sum}`);
    } else if (option === 4) {
        if (a.length === 0) {
            alert("Bạn chưa nhập mảng!");
        } else {
            let max = a[0][0];
            let rowMax = 0,
                colMax = 0;
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    if (a[i][j] > max) {
                        max = a[i][j];
                        rowMax = i;
                        colMax = j;
                    }
                }
            }
            alert(
                `Phần tử lớn nhất là ${max} tại vị trí hàng ${rowMax+1}, cột ${colMax+1}`
            );
        }
    } else if (option === 5) {
        if (a.length === 0) {
            alert("Bạn chưa nhập mảng!");
        } else {
            let rowIndex = Number(
                prompt(
                    `Nhập chỉ số hàng cần tính trung bình (từ 0 đến ${
                        rows - 1
                    }):`
                )
            );

            if (rowIndex < 0 || rowIndex >= rows) {
                alert("Chỉ số hàng không hợp lệ!");
            } else {
                let sum = 0;
                for (let j = 0; j < cols; j++) {
                    sum += a[rowIndex][j];
                }
                let average = sum / cols;
                alert(`Trung bình cộng của hàng ${rowIndex} là: ${average}`);
            }
        }
    } else if (option === 6) {
        a.reverse();
    }
} while (option !== 7);
