let str = prompt("Nhập vào một chuỗi:");
let char = prompt("Nhập vào một kí tự muốn tìm kiếm trong chuỗi");
let check = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
        alert("Tồn tại kí tự cần tìm kiếm");
        check = 1;
        break;
    }
}
if(check!==1){
    alert("Không tồn tại kí tự cần tìm kiếm")
}
