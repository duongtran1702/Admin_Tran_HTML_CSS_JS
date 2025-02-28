let date_1=new Date (prompt("Enter date 1"))
let date_2=new Date (prompt("Enter date 2"))
let timeDiff=Math.abs(date_1.getTime()-date_2.getTime());
document.write(date_1 +"<br>")
document.write(date_2 +"<br>")
document.write(Math.floor(timeDiff/86400000))