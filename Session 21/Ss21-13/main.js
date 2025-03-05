for(let i=1;i<=10;i++){
    for(let j=11-i;j>=1;j--){
        document.write("*")
    }
    document.write("<br>")
}
document.write("<br>")
for(let i=1;i<=10;i++){
    for(let j=1;j<=i;j++){
        document.write("*")
    }
    document.write("<br>")
}
document.write("<br>")
for(let i=1;i<=10;i++){
    for(let j=1;j<=10-i;j++){
        document.write("&nbsp&nbsp")
    }
    for(let x=1;x<=i;x++){
        document.write("*")
    }
    document.write("<br>")
}
document.write("<br>")
for(let i=1;i<=10;i++){
    for(let x=1;x<=i;x++){
        document.write("&nbsp&nbsp")
    }
    for(let j=1;j<=10-i;j++){
        document.write("*")
    }
    
    document.write("<br>")
}