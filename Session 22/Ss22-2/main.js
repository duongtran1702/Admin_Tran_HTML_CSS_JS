let num = [1, 2, 3, 4, 5, 6, 7, 8];
let ans = parseInt(prompt("Enter a number"));
for (let i = 0; i < num.length; i++) {
    if (num[i] === ans) {
        console.log("Bingo");
        var check=1
        break;
    } 
}
if(check!==1) {
    console.log("Chúc bạn may mắn lần sau!!!");
    
}