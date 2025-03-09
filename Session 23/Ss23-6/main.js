let a=[ "", false, 0, 5, 10, "hello world" ]
let b=a.filter(Boolean)
for(let i of b){
    document.writeln(`${i} `)
}
console.log(b);
