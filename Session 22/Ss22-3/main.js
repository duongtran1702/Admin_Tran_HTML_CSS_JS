let a = prompt("Enter number");
let array = a.split("");
let check = 0;
for (let i of array) {
    if (isNaN(i)) {
        check = 1;
    }
}
if (check === 1) {
    document.write("Dãy không hợp lệ !!!");
} else {
    array.reverse();
    for(let i in array) document.write(array[i]+" ")
}
