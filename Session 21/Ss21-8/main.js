document.write("Dãy số Amstrong (100-999): ");
for (let i = 153; i <= 999; i++) {
    let a = Math.floor(i / 100);
    let b = Math.floor(i / 10) % 10;
    let c = i % 10;
    if (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3) === i) {
        document.write(i + " ");
    }
}
