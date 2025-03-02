let num = parseInt(prompt("Nhập vào một số (0-999)"));
let a = Math.floor(num / 100);
let b = Math.floor((num % 100) / 10);
let c = num % 10;

let words = "";

if (a > 0) {
    let hundreds = [
        "",
        "một trăm",
        "hai trăm",
        "ba trăm",
        "bốn trăm",
        "năm trăm",
        "sáu trăm",
        "bảy trăm",
        "tám trăm",
        "chín trăm",
    ];
    words += hundreds[a] + " ";
}

if (b > 1) {
    let tens = [
        "",
        "",
        "hai mươi",
        "ba mươi",
        "bốn mươi",
        "năm mươi",
        "sáu mươi",
        "bảy mươi",
        "tám mươi",
        "chín mươi",
    ];
    words += tens[b] + " ";
} else if (b == 1) {
    words += "mười ";
} else if (a > 0 && c > 0) {
    words += "linh ";
}

if (c > 0) {
    let units = [
        "",
        "một",
        "hai",
        "ba",
        "bốn",
        "năm",
        "sáu",
        "bảy",
        "tám",
        "chín",
    ];
    if (a === 0 && c == 5 && b > 0) {
        words += "lăm";
    } else {
        words += units[c];
    }
}

alert(words.trim());
