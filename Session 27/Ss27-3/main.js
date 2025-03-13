function tinhDienTichTron(r) {
    return Math.PI * r * r;
}

function tinhChuViTron(r) {
    return 2 * Math.PI * r;
}

function tinhDienTichChuNhat(a, b) {
    return a * b;
}

function tinhChuViChuNhat(a, b) {
    return 2 * (a + b);
}

function menu() {
    let choice;
    do {
        choice = parseInt(prompt(
            "===== MENU HÌNH HỌC =====\n" +
            "1. Tính diện tích hình tròn\n" +
            "2. Tính chu vi hình tròn\n" +
            "3. Tính diện tích hình chữ nhật\n" +
            "4. Tính chu vi hình chữ nhật\n" +
            "5. Thoát\n" +
            "Nhập lựa chọn (1-5):"
        ));

        switch (choice) {
            case 1: {
                let r = parseFloat(prompt("Nhập bán kính hình tròn:"));
                alert(`Diện tích hình tròn: ${tinhDienTichTron(r).toFixed(2)}`);
                break;
            }
            case 2: {
                let r = parseFloat(prompt("Nhập bán kính hình tròn:"));
                alert(`Chu vi hình tròn: ${tinhChuViTron(r).toFixed(2)}`);
                break;
            }
            case 3: {
                let a = parseFloat(prompt("Chiều dài hình chữ nhật:"));
                let b = parseFloat(prompt("Chiều rộng hình chữ nhật:"));
                alert(`Diện tích hình chữ nhật: ${tinhDienTichChuNhat(a, b).toFixed(2)}`);
                break;
            }
            case 4: {
                let a = parseFloat(prompt("Chiều dài hình chữ nhật:"));
                let b = parseFloat(prompt("Chiều rộng hình chữ nhật:"));
                alert(`Chu vi hình chữ nhật: ${tinhChuViChuNhat(a, b).toFixed(2)}`);
                break;
            }
            case 5:
                alert("Tạm biệt!");
                break;
            default:
                alert("Lựa chọn không hợp lệ!");
        }
    } while (choice !== 5);
}

menu();
