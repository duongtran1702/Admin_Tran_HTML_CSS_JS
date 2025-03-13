let a = [5, 4, 2, 7, 8, 3, 6];
function sxSoChan(a) {
    let soChan = a.filter((temp) => temp % 2 === 0).sort((a, b) => a - b);
    let i = 0;
    let b = a.map((temp) => (temp % 2 === 0 ? soChan[i++] : temp));
    return alert(`${a.join(" ")} => ${b.join(" ")}`);
}
sxSoChan(a);
