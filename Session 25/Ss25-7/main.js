let str = "hello WORLD";
function formatString(str) {
    let temp = str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
    return temp;
}
alert(formatString(str));
