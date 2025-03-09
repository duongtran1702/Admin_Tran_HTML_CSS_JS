let a=[]
for(let i=0;i<10;i++){
    a[i]=+prompt(`Nhập phần tử thứ ${i+1}`)
}
document.w
let index=0,result="";
for(let i of a){
    if(i>10){
        result+=i+" "
        index+=1
    }
}
if(index>0){
    document.writeln(`Các số lớn hơn 10 là :${result}`)
}
else {
    document.write("Không có số nào lớn hơn 10")
}