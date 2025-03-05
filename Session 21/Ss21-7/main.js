let tienGoc, laiSuatThang, soThang;
do {
    tienGoc = parseFloat(prompt("Nhập số tiền gửi ban đầu:"));
    laiSuatThang = parseFloat(prompt("Nhập lãi suất :"));
    soThang = parseInt(prompt("Nhập số tháng gửi:"));
    if (
        isNaN(tienGoc) ||
        isNaN(laiSuatThang) ||
        isNaN(soThang) ||
        tienGoc <= 0 ||
        laiSuatThang < 0 ||
        soThang <= 0
    ) {
        alert("Dữ liệu không hợp lệ. Vui lòng nhập lại.");
    }
} while (
    isNaN(tienGoc) ||
    isNaN(laiSuatThang) ||
    isNaN(soThang) ||
    tienGoc <= 0 ||
    laiSuatThang < 0 ||
    soThang <= 0
);

let tongTien = tienGoc * Math.pow(1 + laiSuatThang/100, soThang);
let tienLai = tongTien - tienGoc;

alert(
    `Số tiền lãi: ${tienLai.toLocaleString("vi")} VND\n` +
        `Tổng tiền nhận được: ${tongTien.toLocaleString("vi")} VND`
);
