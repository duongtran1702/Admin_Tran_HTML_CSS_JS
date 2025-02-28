
let amount=parseInt(prompt("Enter the amount you want to deposit"))
let month=parseInt(prompt("Enter the month you want to deposit"))
let totalBalance=Math.round(amount*Math.pow(1+0.043/12,month));
document.write("Principal amount : " + amount.toLocaleString('vi')+" VND")
document.write("<br>Total amount : "+ totalBalance.toLocaleString('vi')+" VND")