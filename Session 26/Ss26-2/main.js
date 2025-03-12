let str = prompt("nhập vào một mảng chuỗi");
function sang(str) {
    let a = str.split(" ").filter((temp) => temp.trim() !== "");
    if (a.length === 0) alert("Mảng không có phần tử nào");
    let b = a.filter((temp) =>temp.length>=5);
    alert(`${b.join(" ")}`);
}
sang(str);
