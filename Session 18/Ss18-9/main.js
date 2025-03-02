// let hour = parseInt(prompt("Nhập vào giờ"));
// let minute = prompt("Nhập vào phút");
// let second = prompt("Nhập vào giây");
// let time;
// if (minute < 10) minute = "0" + minute;
// if (second < 10) second = "0" + second;
// if (hour === 0 && minute === "00" && second === "00") {
//     hour = 12;
//     time = hour + ":" + minute + ":" + second + " AM";
// } else if (hour > 12) {
//     hour = hour - 12;
//     time = hour + ":" + minute + ":" + second + " PM";
//     if (hour < 10) {
//         time = "0" + time;
//     }
// } else {
//     time = hour + ":" + minute + ":" + second + " AM";
//     if (hour < 10) {
//         time = "0" + time;
//     }
// }

// alert(time);

let hour = parseInt(prompt("Nhập vào giờ"));
let minute = parseInt(prompt("Nhập vào phút"));
let second = parseInt(prompt("Nhập vào giây"));

if (
    isNaN(hour) ||
    isNaN(minute) ||
    isNaN(second) ||
    hour < 0 ||
    hour > 23 ||
    minute < 0 ||
    minute > 59 ||
    second < 0 ||
    second > 59
) {
    alert("Thời gian không hợp lệ!");
} else {
    let period = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    minute = minute.toString().padStart(2, "0");
    second = second.toString().padStart(2, "0");

    let time = `${hour}:${minute}:${second} ${period}`;
    alert(time);
}
