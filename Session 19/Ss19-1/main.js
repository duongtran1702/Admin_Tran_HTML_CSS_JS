let month = parseInt(prompt("Nhập vào một tháng"));
if (month <= 12 && month >= 1) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert("Tháng " + month + " có 31 ngày");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            alert("Tháng " + month + " có 30 ngày");
            break;
        case 2:
            alert("Tháng " + month + " có 29 ngày");
            break;
    }
}
