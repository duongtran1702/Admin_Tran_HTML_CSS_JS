class Task {
    constructor(id, name, description, startTime, status = 'Chưa hoàn thành') {
        this.id = id;
        this.name = name;
        this.description = description;
        this.startTime = startTime;
        this.status = status;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(id, name, description, startTime) {
        const newTask = new Task(id, name, description, startTime);
        this.tasks.push(newTask);
        console.log(`Đã thêm công việc: "${name}".`);
    }

    showAllTasks() {
        if (this.tasks.length === 0) {
            console.log('Danh sách công việc trống.');
            return;
        }
        this.tasks.forEach((task) => {
            console.log(
                `ID: ${task.id} | Tên: ${task.name} | Mô tả: ${task.description} | Bắt đầu: ${task.startTime} | Trạng thái: ${task.status}`
            );
        });
    }

    updateTaskStatus(id) {
        const task = this.tasks.find((t) => t.id === id);
        if (task) {
            task.status =
                task.status === 'Hoàn thành' ? 'Chưa hoàn thành' : 'Hoàn thành';
            console.log(
                `Đã cập nhật trạng thái công việc ID ${id} thành: ${task.status}`
            );
        } else {
            console.log(`Không tìm thấy công việc có ID: ${id}`);
        }
    }

    filterByStatus(status) {
        const filtered = this.tasks.filter((t) => t.status === status);
        if (filtered.length === 0) {
            console.log(`Không có công việc nào có trạng thái "${status}".`);
            return;
        }
        filtered.forEach((task) => {
            console.log(
                `ID: ${task.id} | Tên: ${task.name} | Mô tả: ${task.description} | Bắt đầu: ${task.startTime} | Trạng thái: ${task.status}`
            );
        });
    }

    sortByStatus() {
        const sorted = [...this.tasks].sort((a, b) =>
            a.status.localeCompare(b.status)
        );
        sorted.forEach((task) => {
            console.log(
                `ID: ${task.id} | Tên: ${task.name} | Mô tả: ${task.description} | Bắt đầu: ${task.startTime} | Trạng thái: ${task.status}`
            );
        });
    }
}

const manager = new TaskManager();

while (true) {
    const choice = prompt(
        `===== QUẢN LÝ CÔNG VIỆC =====
1. Thêm công việc mới
2. Hiển thị tất cả công việc
3. Cập nhật trạng thái công việc theo ID
4. Lọc công việc theo trạng thái
5. Sắp xếp công việc theo trạng thái
6. Thoát
============================
Chọn (1-6): `
    );

    switch (choice) {
        case '1':
            const id = prompt('Nhập ID công việc:');
            const name = prompt('Nhập tên công việc:');
            const description = prompt('Nhập mô tả công việc:');
            const startTime = prompt('Nhập thời gian bắt đầu:');
            manager.addTask(id, name, description, startTime);
            break;
        case '2':
            manager.showAllTasks();
            break;
        case '3':
            const updateId = prompt(
                'Nhập ID công việc cần cập nhật trạng thái:'
            );
            manager.updateTaskStatus(updateId);
            break;
        case '4':
            const filterStatus = prompt(
                'Nhập trạng thái muốn lọc (Hoàn thành/Chưa hoàn thành):'
            );
            manager.filterByStatus(filterStatus);
            break;
        case '5':
            manager.sortByStatus();
            break;
        case '6':
            console.log('Thoát chương trình. Tạm biệt!');
            break;
        default:
            console.log('Vui lòng chọn từ 1 đến 6.');
    }

    if (choice === '6') break;
}
