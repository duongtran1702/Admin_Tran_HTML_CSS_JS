let year = prompt("Nhập một năm:");

if (year === null || year.trim() === "" || isNaN(year)) {
  alert("Vui lòng nhập một năm hợp lệ!");
} else {
  year = Number(year);

  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    alert(year + " là năm nhuận.");
  } else {
    alert(year + " không phải là năm nhuận.");
  }
}
