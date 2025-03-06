let a = [1, 1, 2, 3, 4, 3, 4, 5, 6, 6];
let b = new Array(100).fill(0);
let count = 0;
for (let i of a) {
    ++b[i];
    if (b[i] > count) {
        count = b[i];
    }
}
a.length=0;
for(let i in b){
    if(b[i]>0){
        a.push(i);
    }
}
for(let i in a){
    document.write(`${a[i]} `)
}