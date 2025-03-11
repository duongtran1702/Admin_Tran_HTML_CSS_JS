let users = [];
function isValidEmail(email) {
    return email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn"));
}
function registerEmail(email) {
    if (!isValidEmail(email)) {
        alert("Email không hợp lệ! Phải chứa @ và kết thúc bằng .com hoặc .vn");
        return;
    }
    if (users.includes(email)) {
        alert("Tài khoản đã tồn tại!");
        return;
    }
    users.push(email);
    alert("Đăng ký thành công!");
}
registerEmail(prompt("Enter email 1"))
registerEmail(prompt("Enter email 2"))
alert(`${users.join(" ")}`)

