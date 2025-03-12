let emailList = [];
for (let i = 0; i < 5; i++) {
    emailList[i] = prompt(`Enter email ${i + 1} :`);
}
function sangEmail(email) {
    let a = email.filter(temp => {
        temp = temp.trim();
        return temp.includes("@") && !temp.includes(" ");
    });    
    if (a.length === 0) {
        alert("Mảng không có phần tử nào");
        return;
    }
    alert(`${a.join(" ")}`);
}
sangEmail(emailList);
