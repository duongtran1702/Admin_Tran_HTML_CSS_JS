let a =parseInt(prompt("Enter a"))
let b =parseInt(prompt("Enter b"))
let result=1;
if(!Number.isNaN(a)&&!Number.isNaN(b)){
    for(let i=0;i<b;i++){
        result*=a;
    }
    alert(result)
}
else{
    alert("Không hợp lệ!!!")
}
