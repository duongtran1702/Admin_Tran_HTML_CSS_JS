let a = [];
let rows = 0,
    cols = 0;
let option;

do {
    option = Number(
        prompt(`
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tính tổng đường chéo chính
5. Tính tổng đường chéo phụ
6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột
7. Thoát chương trình
`)
    );

    if (option === 1) {
        rows = Number(prompt("Nhập số hàng:"));
        cols = Number(prompt("Nhập số cột:"));
        a = [];
        for (let i = 0; i < rows; i++) {
            a[i] = [];
            for (let j = 0; j < cols; j++) {
                a[i][j] = Number(prompt(`Nhập phần tử a[${i+1}][${j+1}]:`));
            }
        }
    } else if (option === 2) {
        if (a.length === 0) {
            alert("Bạn chưa nhập mảng!");
        } else {
            let result = "Mảng 2 chiều:\n";
            for (let i = 0; i < rows; i++) {
                result += "\n" + a[i].join("   ") ;
            }
            alert(result);
        }
    } else if (option === 3) {
        let sum = 0;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                sum += a[i][j];
            }
        }
        alert(`Tổng các phần tử trong mảng là: ${sum}`);
    } else if (option === 4) {
        if (rows !== cols) {
            alert(
                "Không phải ma trận vuông! Không thể tính tổng đường chéo chính."
            );
        } else {
            let sum = 0;
            for (let i = 0; i < rows; i++) {
                sum += a[i][i];
            }
            alert(`Tổng đường chéo chính là: ${sum}`);
        }
    } else if (option === 5) {
        if (rows !== cols) {
            alert(
                "Không phải ma trận vuông! Không thể tính tổng đường chéo phụ."
            );
        } else {
            let sum = 0;
            for (let i = 0; i < rows; i++) {
                sum += a[i][cols - 1 - i];
            }
            alert(`Tổng đường chéo phụ là: ${sum}`);
        }
    } else if (option === 6) {
        if (a.length === 0) {
            alert("Bạn chưa nhập mảng!");
        } else {
            let type = prompt(
                "Bạn muốn tính theo (h)àng hay (c)ột? (nhập 'h' hoặc 'c')"
            ).trim().toLowerCase();
            if (type === "h") {
                let rowIndex = Number(
                    prompt(`Nhập chỉ số hàng (0 đến ${rows - 1}):`)
                );
                if (rowIndex >= 0 && rowIndex < rows) {
                    let sum = 0;
                    for (let j = 0; j < cols; j++) {
                        sum += a[rowIndex][j];
                    }
                    alert(`Trung bình hàng ${rowIndex} là: ${sum / cols}`);
                } else {
                    alert("Chỉ số hàng không hợp lệ!");
                }
            } else if (type === "c") {
                let colIndex = Number(
                    prompt(`Nhập chỉ số cột (0 đến ${cols - 1}):`)
                );
                if (colIndex >= 0 && colIndex < cols) {
                    let sum = 0;
                    for (let i = 0; i < rows; i++) {
                        sum += a[i][colIndex];
                    }
                    alert(`Trung bình cột ${colIndex} là: ${sum / rows}`);
                } else {
                    alert("Chỉ số cột không hợp lệ!");
                }
            } else {
                alert("Bạn chỉ được nhập 'h' hoặc 'c'!");
            }
        }
    } else if (option === 7) {
        alert("Đã thoát chương trình.");
    } else {
        alert("Lựa chọn không hợp lệ!");
    }
} while (option !== 7);
