let danhSach = [];

function nhapDanhSach() {
    let input = prompt("Nhập các số nguyên, cách nhau bởi dấu phẩy:");
    danhSach = input.split(",").map(x => parseInt(x.trim())).filter(x => !isNaN(x));
}

function tinhTrungBinh() {
    if (danhSach.length === 0) {
        alert("Danh sách trống.");
        return;
    }
    let tong = danhSach.reduce((sum, x) => sum + x, 0);
    alert(`Trung bình: ${(tong / danhSach.length).toFixed(2)}`);
}

function chanLonNhat() {
    let chan = danhSach.filter(x => x % 2 === 0);
    if (chan.length === 0) {
        alert("Không có số chẵn.");
    } else {
        alert(`Số chẵn lớn nhất: ${Math.max(...chan)}`);
    }
}

function leNhoNhat() {
    let le = danhSach.filter(x => x % 2 !== 0);
    if (le.length === 0) {
        alert("Không có số lẻ.");
    } else {
        alert(`Số lẻ nhỏ nhất: ${Math.min(...le)}`);
    }
}

function menu() {
    let choice;
    do {
        choice = parseInt(prompt(
            "===== MENU SỐ NGUYÊN =====\n" +
            "1. Nhập danh sách số nguyên\n" +
            "2. Tính trung bình các số\n" +
            "3. Tìm số chẵn lớn nhất\n" +
            "4. Tìm số lẻ nhỏ nhất\n" +
            "5. Thoát\n" +
            "Chọn (1-5):"
        ));

        switch (choice) {
            case 1: nhapDanhSach(); break;
            case 2: tinhTrungBinh(); break;
            case 3: chanLonNhat(); break;
            case 4: leNhoNhat(); break;
            case 5: alert("Tạm biệt!"); break;
            default: alert("Lựa chọn không hợp lệ!");
        }
    } while (choice !== 5);
}

menu();
