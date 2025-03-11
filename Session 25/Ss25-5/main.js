let a = [-1, 1.2, 1.5, -3, -5, -9, -8];
function countInteger(a) {
    let count = 0;
    if (Array.isArray(a)) {
        let b = a.filter((temp) => Number.isInteger(temp) && temp > 0);
        if (b.length !== 0) {
            for (let i of b) {
                count += 1;
            }
        } else return "Mảng không chứa số nguyên dương";
        return count;
    } else return " Dữ liệu không hợp lệ";
}
alert(countInteger(a));
