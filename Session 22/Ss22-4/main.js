let a = prompt("Enter number");
let array = a.split("");
let check = 0;
for (let i of array) {
    if (isNaN(i)) {
        check = 1;
    }
}
if (check === 1) {
    document.write("Dãy số không hợp lệ !!!");
} else {
    let max=array[0]
    for(let i=1;i<=array.length-1;i++){
        if(max<array[i]) max=array[i]
    }
    document.write(`${max} là số lớn nhất trong dãy số `)
}
