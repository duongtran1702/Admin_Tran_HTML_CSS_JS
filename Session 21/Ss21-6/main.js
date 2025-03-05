let n=Number(prompt("Enter n"));
let result=""
for(let i=1;i<=Math.sqrt(n); i++){
    if(n%i===0){
        let temp =n/i;
        if(temp!==i){
            result+=` ${i} ${temp}`
        }
        else result+=` ${i}`
    }
}
document.write(`Ước của ${n} là :${result}`)