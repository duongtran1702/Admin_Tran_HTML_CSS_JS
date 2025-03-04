let num = Number(prompt("Enter an integer num"));
if (!isNaN(num) && Number.isInteger(num) && num > 0) {
    let result = `Các số chia hết cho 5 từ 1 - ${num}:`;
    for (let i = 1; i <= num; i += 1) {
        if (i % 5 === 0) result += " " + i + ",";
    }
    if (result.endsWith(",")) {
        result = result.slice(0, -1);
    }
    alert(result);
} else {
    alert("Invalid input !");
}
