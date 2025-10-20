document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskName');
    const addButton = document.querySelector('.task-input button');

    const pendingTasks = document.getElementById('pendingTasks');
    const inProgressTasks = document.getElementById('inProgressTasks');
    const doneTasks = document.getElementById('doneTasks');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function renderTasks() {
        pendingTasks.innerHTML = '';
        inProgressTasks.innerHTML = '';
        doneTasks.innerHTML = '';

        tasks.forEach((task, index) => {
            const taskElement = document.createElement('div');
            taskElement.classList.add('task');
            taskElement.innerHTML = `
                <p>${task.name}</p>
                ${
                    task.status !== 'done'
                        ? `<button onclick="changeStatus(${index})">Chuyển tiếp</button>`
                        : ''
                }
            `;

            if (task.status === 'pending') {
                pendingTasks.appendChild(taskElement);
            } else if (task.status === 'inProgress') {
                inProgressTasks.appendChild(taskElement);
            } else {
                doneTasks.appendChild(taskElement);
            }
        });

        saveTasks();
    }

    window.changeStatus = function (index) {
        if (tasks[index].status === 'pending') {
            tasks[index].status = 'inProgress';
        } else if (tasks[index].status === 'inProgress') {
            tasks[index].status = 'done';
        }
        renderTasks();
    };

    addButton.addEventListener('click', function () {
        const taskName = taskInput.value.trim();
        if (taskName === '') {
            alert('Vui lòng nhập tên công việc!');
            return;
        }

        tasks.push({ name: taskName, status: 'pending' });
        taskInput.value = '';
        renderTasks();
    });

    renderTasks();
});
