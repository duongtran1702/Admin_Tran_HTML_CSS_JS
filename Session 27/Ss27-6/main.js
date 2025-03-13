let a = [2, 4, 6, 8, 10,12];
function kiemTraCSC(a) {
    let temp = a[1] - a[0];
    for (let i = 2; i < a.length; i++) {
        if(a[i]-a[i-1]!==temp){
            return alert("FALSE")
        }
    }
    return alert("TRUE")
}
kiemTraCSC(a)
