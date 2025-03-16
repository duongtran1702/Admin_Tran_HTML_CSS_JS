let employees = [];
function addEmployee(input) {
    let id;
    do {
        id = Math.floor(Math.random() * 1000);
    } while (input.some((temp) => temp.id === id));
    let name = prompt('Nhap ten :');
    let position = prompt('Nhap vi tri :');
    let salary = Number(prompt('Nhap luong :'));
    let temp = { id, name, position, salary };
    input.push(temp);
}
function deleteEmployee(input) {
    let idTemp = Number(prompt('Nhap id muon xoa :'));
    let index = input.findIndex((temp) => temp.id === idTemp);
    if (index === -1) {
        console.log('Khong tim thay');
    } else {
        let choice = prompt(
            `Ban co muon xoa nhan vien ${input[index].name} khong ? Yes (Y) hoac No (N)`
        ).toUpperCase();
        if (choice === 'Y') {
            input.splice(index, 1);
            console.log('Xoa thanh cong');
        } else {
            console.log('Da huy xoa');
        }
    }
}
function updateSalary(input) {
    let idTemp = Number(prompt('Nhap id nhan vien muon cap nhat luong :'));
    let index = input.findIndex((temp) => temp.id === idTemp);
    if (index === -1) {
        console.log('Khong tim thay nhan vien');
    } else {
        input[index].salary = Number(prompt('Nhap luong moi'));
    }
}
function findEmployeeByName(input) {
    let ten = prompt('Nhap ten muon tim :');
    let temp = input.filter(
        (temp) => temp.name.toUpperCase() === ten.toUpperCase()
    );
    if (temp.length === 0) {
        console.log('Khong tim thay');
    } else {
        for (const i in temp) {
            console.log(`${Number(i) + 1}. ${temp[i].name}`);
        }
    }
}
function showMenu() {
    console.log('\n--- QUẢN LÝ NHÂN VIÊN ---');
    console.log('1. Thêm nhân viên');
    console.log('2. Xóa nhân viên theo ID');
    console.log('3. Cập nhật lương theo ID');
    console.log('4. Tìm kiếm nhân viên theo tên');
    console.log('0. Thoát');
}

function runProgram() {
    let choice;
    do {
        showMenu();
        choice = prompt('Nhập lựa chọn của bạn:');
        switch (choice) {
            case '1':
                addEmployee(employees);
                break;
            case '2':
                deleteEmployee(employees);
                break;
            case '3':
                updateSalary(employees);
                break;
            case '4':
                findEmployeeByName(employees);
                break;
            case '0':
                console.log('Thoát chương trình.');
                break;
            default:
                console.log('Lựa chọn không hợp lệ. Vui lòng thử lại.');
        }
    } while (choice !== '0');
}

runProgram();
