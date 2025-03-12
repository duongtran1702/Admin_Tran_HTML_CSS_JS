let a = prompt("Nhập vào một mảng số").replace(/\s+/g, "").split(",").filter((temp) => temp.trim() !== "");
a = a.map(Number);
function findMaxElement(a) {
    if (a.length === 0) {
        alert("Mảng ko có dữ liệu");
        return;
    }
    let max = Math.max(...a);
    let maxPos = a.indexOf(max);
    alert(`max = ${max}\nposition : ${maxPos}`);
}
findMaxElement(a);
