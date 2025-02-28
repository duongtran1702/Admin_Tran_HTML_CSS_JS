let num=Number(prompt("Enter a number"))
let num_1=Math.sqrt(num);
let notification = Number.isInteger(num_1) ? " là số chính phương":" không là số chính phương"
alert(num + notification)