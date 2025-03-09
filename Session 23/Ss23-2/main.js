let a=[]
for(let i=0;i<10;i++){
    a[i]=prompt(`Nhập phần tử thứ ${i+1}`)
}
console.log(a);
let b=a.filter(value=>value!==null &&value.trim()!=="")
if(b.length==0){
    alert("Không có số lớn nhất")
}
else{
    let max=b[0],index=0;
    for (let i in b){
        if(b[i]>b[0]){
            max=b[i];
            index=i;
        }
    }
    document.writeln(`Max element:${max} <br> Index:${index}`)

}