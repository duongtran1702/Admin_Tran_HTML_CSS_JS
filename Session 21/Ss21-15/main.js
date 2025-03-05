let money = parseInt(prompt("Enter money")) / 1000;
let a=[500,200,100,50,20,10,5,2,1]
for(let i=0;i<a.length;i++){
    let count=Math.floor(money/a[i])
    money %=a[i]
    if(count>0){
        document.write(`${a[i]}.000 : ${count} tờ <br>`)
    }
}