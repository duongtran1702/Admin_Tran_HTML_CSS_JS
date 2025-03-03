let character = prompt("Nhập vào một kí tự");
if (character.length !=1) {
    alert("Đây không phải là chữ cái");
} else {
    if (
        (character >= "a" && character <= "z") ||
        (character >= "A" && character <= "Z")
    ) {
        alert("Kí tự " + character + " là chữ cái");
    } else {
        alert("Đây không phải là chữ cái");
    }
}
