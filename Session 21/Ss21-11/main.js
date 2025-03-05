let day = parseInt(prompt("Nhập ngày sinh:"));
let month = parseInt(prompt("Nhập tháng sinh:"));
let zodiac = "";
if (
    (month === 3 && day >= 21 && day <= 31) ||
    (month === 4 && day <= 20 && day > 0)
) {
    zodiac = "Bạch Dương";
} else if (
    (month === 4 && day >= 21 && day <= 30) ||
    (month === 5 && day <= 20)
) {
    zodiac = "Kim Ngưu";
} else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    zodiac = "Song Tử";
} else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
    zodiac = "Cự Giải";
} else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    zodiac = "Sư Tử";
} else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    zodiac = "Xử Nữ";
} else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
    zodiac = "Thiên Bình";
} else if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) {
    zodiac = "Bọ Cạp";
} else if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) {
    zodiac = "Nhân Mã";
} else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    zodiac = "Ma Kết";
} else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    zodiac = "Bảo Bình";
} else if (
    (month === 2 && day >= 19 && day <= 28) ||
    (month === 3 && day <= 20)
) {
    zodiac = "Song Ngư";
} else {
    zodiac = "Ngày hoặc tháng không hợp lệ!!!!";
}
alert(`Cung hoàng đạo của bạn là : ${zodiac}`);
