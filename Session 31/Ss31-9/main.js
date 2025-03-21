class Quest {
    constructor(id, task, completed) {
        this.id = id;
        this.task = task;
        this.completed = completed;
    }
    toggle() {
        this.completed = !this.completed;
    }
}

class Manage {
    constructor() {
        this.todoList = [
            new Quest(1, 'Hit the gym', false),
            new Quest(2, 'Pay bills', true),
            new Quest(3, 'Meet George', false),
            new Quest(4, 'Buy eggs', false),
            new Quest(5, 'Read a book', false),
            new Quest(6, 'Organize office', false),
        ];
        this.id = this.todoList.length;
    }

    show() {
        let ul = document.getElementById('myUL');
        ul.innerHTML = '';
        this.todoList.forEach((temp, index) => {
            let quest = document.createElement('li');
            quest.innerHTML = `${temp.task}`;
            if (temp.completed === true) {
                quest.classList.add('checked');
            }

            // Toggle trạng thái khi click vào công việc
            quest.onclick = () => {
                quest.classList.toggle('checked');
                temp.toggle(); // Cập nhật trạng thái trong đối tượng
            };

            // Tạo nút close
            let close = document.createElement('div');
            close.classList.add('close');
            close.innerText = 'x';

            // Gán sự kiện xóa
            close.onclick = (e) => {
                e.stopPropagation(); // Không bị ảnh hưởng bởi quest.onclick
                let confirm = window.confirm('Xác nhận xóa');
                console.log('check', confirm);

                if (confirm == true) {
                    this.todoList.splice(index, 1);
                    this.show();
                }
            };

            quest.appendChild(close);
            ul.appendChild(quest);
        });
    }

    add(task, completed) {
        this.id += 1;
        if (task.trim() !== '')
            this.todoList.push(new Quest(this.id, task, completed));
    }
}
const manager = new Manage();
manager.show();
let btn = document.getElementsByClassName('addBtn')[0];
btn.onclick = function () {
    let task = document.getElementById('myInput').value;
    let completed = false;
    manager.add(task, completed);
    manager.show();
    document.getElementById('myInput').value = '';
};
