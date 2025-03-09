let n = Number(prompt("Enter n"));
let a = [];
for (let i = 0; i < n; i++) {
    a[i] = prompt(`Nhập phần tử thứ ${i + 1}`);
}
let index = 0;
for (let i of a) {
    if (i >= 0 && i.trim() !="") {
        index += 1;
        document.writeln(`${i} `);
    }
}
if (index === 0) {
    document.writeln("Không có ký tự số");
}
