let width=parseInt(prompt("Enter width"))
let height=parseInt(prompt("Enter height"))
for(let i=1;i<=height;i++){
    for(let j=1;j<=width;j++){
        if(i===1||j===1||j===width||i===height){
            document.write("*")
        }
        else{
            document.write("&nbsp&nbsp")
        }
    }
    document.write("<br>")
}