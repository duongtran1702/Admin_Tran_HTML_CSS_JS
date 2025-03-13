let a = [1, 2, 3, 5, 6];
function timSoConThieu(a) {
    for (let i = 1; i < a.length; i++) {
        if (a[i] - a[i - 1] !== 1) {
            return (a[i] + a[i - 1]) / 2;
        }
    }
    return "Day so lien tiep";
}
alert(timSoConThieu(a));
