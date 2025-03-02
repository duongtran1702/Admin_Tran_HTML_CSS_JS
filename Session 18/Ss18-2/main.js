let a=Number(prompt("Enter the math point"))
let b=Number(prompt("Enter the literature point"))
let c=Number(prompt("Enter the english point"))

let average = (a+b+c)/3
average=average.toFixed(1)

if(average>=8.0){
    alert("Gioi")
}
else if(average>=6.5){
    alert("Kha")
}
else if(average>=5.0){
    alert("Trung binh")
}
else{
    alert("Yeu")
}

