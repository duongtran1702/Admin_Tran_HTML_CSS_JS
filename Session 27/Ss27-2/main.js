let students = [];

function inputStudent(students) {
    let n = Number(prompt("Nhập số lượng sinh viên"));
    for (let i = 0; i < n; i++) {
        students[i] = prompt(`Sinh viên ${i + 1} :`);
    }
}
function showStudent(students) {
    if (students.length === 0) alert("Danh sách sinh viên trống");
    else {
        let result = "";
        for (let i = 0; i < students.length; i++) {
            result += `${i + 1}. ${students[i]} \n`;
        }
        alert(result);
    }
}
function findStudent(students) {
    if (students.length === 0) alert("Danh sách sinh viên trống");
    else {
        let nameStudent = prompt("Nhập tên sinh viên muốn tìm");
        let foundStudent = students.filter((temp) =>
            temp.includes(nameStudent)
        );
        let result = foundStudent
            .map((student, index) => `${index + 1}. ${student}`)
            .join("\n");
        alert(result || "Không có sinh viên nào phù hợp");
    }
}
function removeStudent(students) {
    if (students.length === 0) {
        alert("Danh sách sinh viên trống");
    } else {
        let nameStudent = prompt("Nhập tên sinh viên cần xóa");
        let index = students.findIndex((student) => student === nameStudent);
        if (index === -1) {
            alert("Không tìm thấy sinh viên cần xóa");
        } else {
            students.splice(index, 1);
            alert("Xóa thành công");
        }
    }
}
while (true) {
    let choice = prompt(
        `MENU:
1. Nhập danh sách sinh viên
2. Hiển thị danh sách sinh viên
3. Tìm sinh viên theo tên
4. Xóa sinh viên theo tên
5. Thoát
Nhập lựa chọn (1-5):`
    );
    if (choice === "1") {
        inputStudent(students);
    } else if (choice === "2") {
        showStudent(students);
    } else if (choice === "3") {
        findStudent(students);
    } else if (choice === "4") {
        removeStudent(students);
    } else if (choice === "5") {
        alert("Thoát chương trình!");
        break;
    } else {
        alert("Lựa chọn không hợp lệ! Vui lòng nhập từ 1 đến 5.");
    }
}
