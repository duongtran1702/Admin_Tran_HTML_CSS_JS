let str = "";
let option;

do {
    option = Number(
        prompt(`
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi
4. Đảo ngược chuỗi ký tự
5. Đếm số lượng từ trong chuỗi ký tự
6. Tìm kiếm và thay thế các ký tự
7. Thoát chương trình
`)
    );

    if (option === 1) {
        str = prompt("Nhập chuỗi:");
    } else if (option === 2) {
        alert(`Chuỗi hiện tại: "${str}"`);
    } else if (option === 3) {
        str = str.trim();
        alert(`Chuỗi sau khi loại bỏ khoảng trắng đầu và cuối: "${str}"`);
    } else if (option === 4) {
        let reversed = str.split("").reverse().join("")
        alert(`Chuỗi đảo ngược: "${reversed}"`);
    } else if (option === 5) {
        let wordCount = str.trim().split(/\s+/).filter(temp=>temp!=="").length;
        alert(`Số lượng từ trong chuỗi: ${wordCount}`);
    } else if (option === 6) {
        let charFind = prompt("Nhập ký tự cần tìm:");
        if (charFind && str.includes(charFind)) {
            alert(" Tìm thấy ký tự trong chuỗi.");
            let charReplace = prompt("Nhập ký tự thay thế:");
            str = str.replaceAll(charFind, charReplace);
            alert(`Chuỗi sau khi thay thế: "${str}"`);
        } else {
            alert(" Không tìm thấy ký tự trong chuỗi.");
        }
    } else if (option === 7) {
        alert("Thoát chương trình");
    } else {
        alert(" Lựa chọn không hợp lệ. Vui lòng nhập số từ 1 đến 7.");
    }

} while (option !== 7);
