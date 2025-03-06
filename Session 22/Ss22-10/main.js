let a = [];
let choice;
let n;
do {
    choice = prompt(
        "MENU\n" +
        "1. Nhập vào mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Thêm phần tử\n" +
        "4. Sửa phần tử\n" +
        "5. Xóa phần tử\n" +
        "6. Thoát\n" +
        "Lựa chọn của bạn:"
    );
    choice = Number(choice);
    if (choice === 1) {
        n=Number(prompt("Nhập n"))
        for(let i=0;i<n;i++){
            a.push(prompt(`Nhập phần tử thứ ${i+1} :`))
        }
    } else if (choice === 2) {
        alert("Mảng hiện tại: " + a.join(" "));
    } else if (choice === 3) {
        let value = Number(prompt("Nhập giá trị cần thêm:"));
        a.push(value);
    } else if (choice === 4) {
        let index = Number(prompt("Nhập vị trí cần sửa:"));
        if (index >= 0 && index < a.length) {
            a[index] = Number(prompt("Nhập giá trị mới:"));
        } else {
            alert("Vị trí không hợp lệ!");
        }
    } else if (choice === 5) {
        let index = Number(prompt("Nhập vị trí cần xóa:"));
        if (index >= 0 && index < a.length) {
            a.splice(index, 1);
        } else {
            alert("Vị trí không hợp lệ!");
        }
    } else if (choice !== 6) {
        alert("Lựa chọn không hợp lệ!");
    }

} while (choice !== 6);

alert("Chương trình kết thúc!");
