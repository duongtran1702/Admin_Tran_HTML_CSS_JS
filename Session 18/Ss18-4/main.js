let number = prompt("Nhập một số từ 0 đến 9:");
if (number === null || number.trim() === "" || isNaN(number)) {
  alert("Vui lòng nhập một số hợp lệ!");
} else {
  number = Number(number);
  if (number === 0) {
    alert("Số Không");
  } else if (number === 1) {
    alert("Số Một");
  } else if (number === 2) {
    alert("Số Hai");
  } else if (number === 3) {
    alert("Số Ba");
  } else if (number === 4) {
    alert("Số Bốn");
  } else if (number === 5) {
    alert("Số Năm");
  } else if (number === 6) {
    alert("Số Sáu");
  } else if (number === 7) {
    alert("Số Bảy");
  } else if (number === 8) {
    alert("Số Tám");
  } else if (number === 9) {
    alert("Số Chín");
  } else {
    alert("Số không hợp lệ! Vui lòng nhập từ 0 đến 9.");
  }
}
