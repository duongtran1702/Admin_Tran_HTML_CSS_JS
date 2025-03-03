let month = parseInt(prompt("Nhập số tháng (1-12):"));

if (month >= 1 && month <= 12) {
    let season;
    if (month >= 1 && month <= 3) {
        season = "mùa xuân";
    } else if (month >= 4 && month <= 6) {
        season = "mùa hè";
    } else if (month >= 7 && month <= 9) {
        season = "mùa thu";
    } else {
        season = "mùa đông";
    }
    alert(season);
} else {
    alert("tháng không hợp lệ");
}
