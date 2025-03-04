let n = parseInt(prompt("Nhập vào n"));
let check = 0;
let index = 0;
if (!Number.isNaN(n) && n > 0) {
    for (let i = 2; ; i++) {
        check=0;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) check += 1;
        }
        if (check === 0) {
            document.write(i + " ");
            index += 1;
        }
        if (index === n) {
            break;
        }
    }
}
