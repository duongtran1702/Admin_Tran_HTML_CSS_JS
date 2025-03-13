let n = prompt("Nhập vào sô nguyên");
function numberMax(n) {
    let temp = n.split("").map(Number);
    temp.sort((a, b) => b - a);
    let maxNumber = parseInt(`${temp.join("")}`);
    return maxNumber;
}
alert(numberMax(n));
