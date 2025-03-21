class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
}

class EmployeeManager {
    constructor(perPage = 3) {
        this.employees = [
            new Employee('Nguyễn Văn A', 'Developer'),
            new Employee('Trần Thị B', 'Designer'),
            new Employee('Phạm Văn C', 'Project Manager'),
            new Employee('Lê Văn D', 'Tester'),
            new Employee('Ngô Thị E', 'BA'),
            new Employee('Vũ Văn F', 'Scrum Master'),
            new Employee('Đỗ Thị G', 'Designer'),
            new Employee('Trịnh Văn H', 'DevOps'),
        ];
        this.currentPage = 1;
        this.perPage = perPage;
        this.renderTable(this.currentPage);
        this.renderPagination();
    }

    addEmployee(name, position) {
        if (name.trim() === '' || position.trim() === '') {
            alert('Vui lòng nhập đầy đủ thông tin!');
            return;
        }
        this.employees.push(new Employee(name, position));
        this.currentPage = this.getTotalPages(); // nhảy về trang cuối
        this.renderTable(this.currentPage);
        this.renderPagination();
    }

    getTotalPages() {
        return Math.ceil(this.employees.length / this.perPage);
    }

    renderTable(page) {
        const tbody = document.querySelector('table tbody');
        tbody.innerHTML = '';

        const start = (page - 1) * this.perPage;
        const end = start + this.perPage;
        const pageData = this.employees.slice(start, end);

        pageData.forEach((emp, index) => {
            const row = document.createElement('tr');

            const sttCell = document.createElement('td');
            sttCell.innerText = start + index + 1;

            const nameCell = document.createElement('td');
            nameCell.innerText = emp.name;

            const positionCell = document.createElement('td');
            positionCell.innerText = emp.position;

            row.appendChild(sttCell);
            row.appendChild(nameCell);
            row.appendChild(positionCell);

            tbody.appendChild(row);
        });
    }

    renderPagination() {
        const totalPages = this.getTotalPages();
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = '';

        const prevBtn = document.createElement('button');
        prevBtn.innerText = 'Previous';
        prevBtn.disabled = this.currentPage === 1;
        prevBtn.onclick = () => {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.renderTable(this.currentPage);
                this.renderPagination();
            }
        };
        pagination.appendChild(prevBtn);

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.innerText = i;
            btn.className = i === this.currentPage ? 'active' : '';
            btn.onclick = () => {
                this.currentPage = i;
                this.renderTable(this.currentPage);
                this.renderPagination();
            };
            pagination.appendChild(btn);
        }

        const nextBtn = document.createElement('button');
        nextBtn.innerText = 'Next';
        nextBtn.disabled = this.currentPage === totalPages;
        nextBtn.onclick = () => {
            if (this.currentPage < totalPages) {
                this.currentPage++;
                this.renderTable(this.currentPage);
                this.renderPagination();
            }
        };
        pagination.appendChild(nextBtn);
    }
}

const manager = new EmployeeManager();

function addEmployee() {
    const name = document.getElementById('nameInput').value;
    const position = document.getElementById('positionInput').value;
    manager.addEmployee(name, position);
    document.getElementById('nameInput').value = '';
    document.getElementById('positionInput').value = '';
}
