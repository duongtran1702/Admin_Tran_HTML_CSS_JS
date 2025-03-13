function taoMangCon(a, n) {
    let b = [];
    for (let i = 0; i < a.length; i += n) {
        b.push(a.slice(i, i + n));
    }
    let result = b.map(temp => temp.join(" ")).join("\n");
    alert(result);
}
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = 3;
taoMangCon(a, n);
