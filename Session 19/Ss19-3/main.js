let option = parseInt(prompt("Lựa chọn:\n1.VND-->USD\n2.USA-->VND"))
let money=Number(prompt("Nhập vào số tiền"))
if(option===1){
    money=money/23000
    alert(money.toFixed(2)+" USD")
}
else if(option===2){
    money=money*23000
    alert(money.toLocaleString('vi')+" VND")
}