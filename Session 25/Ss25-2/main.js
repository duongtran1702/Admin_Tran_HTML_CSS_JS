let a = 6;
let b = 4;

function sum(a, b) {
    if (!Number.isNaN(parseInt(a)) && !Number.isNaN(parseInt(b))) {
        return a + b;
    }
    else return "Invalid input"
}
alert(sum(a,b));
