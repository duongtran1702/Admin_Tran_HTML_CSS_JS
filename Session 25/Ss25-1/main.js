let a = [ 2, 3, 4, 5];

function printMin(arr) {
    if (arr.length === 0) return "Mảng không chưa phần tử";
    let min = arr[0];
    let check=0;
    for (let i = 1; i < arr.length; i++) {
        if(  !Number.isNaN(parseInt(a[i]))){
            if (min > arr[i]) min = arr[i];
        }
        else return "Giá trị không hợp lệ !"
       
    }
    return min;
}
alert(printMin(a));
