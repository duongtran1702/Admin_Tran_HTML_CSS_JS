let time = [];
for (let i = 0; i < 5; i++) {
    time[i] = prompt("Nhập vào mảng chuỗi yyyy-mm-dd");
}

function formatTime(time) {
    if (time.length === 0) {
        alert("Mảng không có dữ liệu");
        return;
    }
    let splitDates = time.map((dateStr) => dateStr.split("-"));
    let reversedDates = splitDates.map((dateParts) => dateParts.reverse());
    let result = "";
    for (let i = 0; i < reversedDates.length; i++) {
        result += `${reversedDates[i].join("/")}  `;
    }
    alert(result);
}

formatTime(time);
