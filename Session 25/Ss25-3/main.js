let a = [1, "a", "b", 3, 5, 9];
function printEven(a) {
    let result = "";
    if (Array.isArray(a)) {
        let b = a.filter((temp) => !Number.isNaN(temp) && temp % 2 === 0);
        if (b.length !== 0) {
            for (let i of b) {
                result += i + " ";
            }
        } else result += "Mảng không chứa số chẵn";
        return result;
    } else return " Dữ liệu không hợp lệ";
}
alert(printEven(a));
