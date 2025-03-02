const a = parseFloat(prompt("Nhập cạnh a:"));
const b = parseFloat(prompt("Nhập cạnh b:"));
const c = parseFloat(prompt("Nhập cạnh c:"));
if (a + b > c && a + c > b && b + c > a) {
  console.log("Đây là một tam giác hợp lệ.")
  if (a === b && b === c) {
    console.log("Tam giác đều.");
  } else if (a === b || a === c || b === c) {
    console.log("Tam giác cân.");
  } else if (
    a * a + b * b === c * c ||
    a * a + c * c === b * b ||
    b * b + c * c === a * a
  ) {
    console.log("Tam giác vuông.");
  } else {
    console.log("Tam giác thường.");
  }
} else {
  console.log("Ba cạnh không tạo thành một tam giác hợp lệ.");
}
