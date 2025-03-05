let password = "helo";
let ans
do {
    ans = prompt("Enter password");
    if(ans!==password){
        alert("Again!!!")
    }
    else{
        alert("Next ==>")
    }
} while (ans !== password);
