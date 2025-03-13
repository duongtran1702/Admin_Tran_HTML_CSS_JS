let choice, a, b;
while (choice !== 5) {
    let a = parseInt(prompt("Nhập số thứ nhất:"));
    let b = parseInt(prompt("Nhập số thứ hai:"));
    choice = Number(
        prompt(
            "===== MENU TÍNH TOÁN =====\n" +
                "1. Cộng hai số\n" +
                "2. Trừ hai số\n" +
                "3. Nhân hai số\n" +
                "4. Chia hai số\n" +
                "5. Thoát\n" +
                "Nhập lựa chọn (1-5):"
        )
    );
    menu(a, b, choice);
}
function menu(a, b, choice) {
    if (choice === 1) alert(`${a} + ${b} = ${a + b}`);
    else if (choice === 2) alert(`${a} - ${b} = ${a - b}`);
    else if (choice === 3) alert(`${a} * ${b} = ${a * b}`);
    else if (choice === 4) alert(`${a} / ${b} = ${(a/b).toFixed(2)}`);
}
