let str = prompt("Enter string");
function isPalindrome(str) {
    let temp = str.trim().replace(/\s+/g, "");
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] !== temp[temp.length - 1 - i]) return 0;
    }
    return 1;
}
if(isPalindrome(str)===0){
    alert("Không phải chuỗi đối xứng")
}
else alert("Là chuỗi đối xứng")
