let number = parseInt(prompt("Nhập một số:"));
if (number % 3 === 0 && number % 5 === 0) {
    alert(number + " chia hết cho cả 3 và 5");
} else {
    alert(number + " không chia hết cho cả 3 và 5");
}
