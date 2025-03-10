let str = "";
let option;

do {
    option = Number(
        prompt(`
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Tính độ dài của chuỗi
4. Đếm số lần xuất hiện của một ký tự
5. Kiểm tra chuỗi có phải là chuỗi đối xứng
6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
7. Thoát chương trình
`)
    );

    if (option === 1) {
        str = prompt("Nhập chuỗi:");
    } else if (option === 2) {
        if (str === "") {
            alert("Bạn chưa nhập chuỗi!");
        } else {
            alert(`Chuỗi hiện tại là: "${str}"`);
        }
    } else if (option === 3) {
        alert(`Độ dài của chuỗi là: ${str.length}`);
    } else if (option === 4) {
        if (str === "") {
            alert("Bạn chưa nhập chuỗi!");
        } else {
            let ch = prompt("Nhập ký tự cần đếm:");
            let count = 0;
            for (let i of str) {
                if (i === ch) count++;
            }
            alert(`Ký tự '${ch}' xuất hiện ${count} lần.`);
        }
    } else if (option === 5) {
        let cleanStr = str.replace(/\s+/g, "").toLowerCase();
        let reversed = cleanStr.split("").reverse().join("");
        if (cleanStr === reversed) {
            alert("Chuỗi là chuỗi đối xứng.");
        } else {
            alert("Chuỗi không phải là chuỗi đối xứng.");
        }
    } else if (option === 6) {
        let result = str
            .replace(/\s+/g, " ")
            .split(" ")
            .map((temp) => temp.charAt(0).toUpperCase() + temp.slice(1))
            .join(" ");
        alert(`Kết quả chuyển đổi: "${result}"`);
    } else if (option === 7) {
        alert("Đã thoát chương trình.");
    } else {
        alert("Lựa chọn không hợp lệ!");
    }
} while (option !== 7);
