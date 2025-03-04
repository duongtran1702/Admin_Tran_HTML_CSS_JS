let num = Number(prompt("Enter an integer num"));
let sum = 0;
if (!isNaN(num) && Number.isInteger(num) && num > 0) {
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    alert(sum);
} else {
    alert("Invalid input !");
}
