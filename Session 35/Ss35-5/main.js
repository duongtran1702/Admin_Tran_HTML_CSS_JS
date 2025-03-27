class Category {
    constructor(code, name, status) {
        this.code = code;
        this.name = name;
        this.status = status;
    }
}
function saveCategory(array) {
    localStorage.setItem('category', JSON.stringify(array));
}
function loadCategory() {
    return JSON.parse(localStorage.getItem('category')) || [];
}
class Manager {
    constructor() {
        this.categories = loadCategory() || [];
        if (this.categories.length === 0) {
            this.categories.push(new Category('C01', 'Category 1', true));
            this.categories.push(new Category('C02', 'Category 2', true));
            this.categories.push(new Category('C03', 'Category 3', true));
            saveCategory(this.categories);
        }
        this.add();
        this.render(this.categories);
        this.filterStatus();
    }
    render(array) {
        this.categories = loadCategory();
        let tbody = document.getElementById('tbody');
        tbody.innerHTML = '';
        array.forEach((item, index) => {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="td-1">${item.code}</td>
                <td class="td-2">${item.name}</td>
                <td class="td-3">
                    <div class="${item.status ? 'on' : 'off'}">
                        &bull;&nbsp;${
                            item.status ? 'Đang hoạt động' : 'Ngưng hoạt động'
                        }
                    </div>
                </td>
                
            `;

            let td4 = document.createElement('td');
            td4.className = 'td-4';

            let i1 = document.createElement('i');
            i1.className = 'fa-solid fa-trash';
            i1.id = 'clear';
            i1.addEventListener('click', () => {
                this.categories.splice(index, 1);
                saveCategory(this.categories);
                this.render(this.categories);
            });

            let i2 = document.createElement('i');
            i2.className = 'fa-solid fa-pen';
            i2.id = 'update';
            i2.addEventListener('click', () => {
                let name = prompt('Nhập tên mới', item.name);
                if (name) {
                    item.name = name;
                    saveCategory(this.categories);
                    this.render(this.categories);
                }
            });
            td4.appendChild(i1);
            td4.appendChild(i2);
            tr.appendChild(td4);

            tbody.appendChild(tr);
            saveCategory(this.categories);
        });
    }
    add() {
        let btnAdd = document.getElementById('btn-add-category');
        let overlay = document.getElementById('overlay');
        let close = document.getElementById('close');
        let noti_1 = document.getElementById('noti-1');
        let btnAddContent = document.getElementById('btn-add-content');
        let noti_2 = document.getElementById('noti-2');
        let categoryName = document.getElementById('category-name');
        let categoryCode = document.getElementById('category-code');

        btnAdd.addEventListener('click', () => {
            overlay.style.visibility = 'visible';
            overlay.style.opacity = '1';
        });
        close.onclick = () => {
            overlay.style.visibility = 'hidden';
            overlay.style.opacity = '0';
        };
        btnAddContent.addEventListener('click', () => {
            let code = document.getElementById('category-code').value;
            console.log(code);

            let name = document.getElementById('category-name').value;
            let statusInput = document.querySelector(
                'input[name="status"]:checked'
            ).value;

            noti_1.style.display = 'none';
            noti_2.style.display = 'none';
            categoryCode.classList.remove('empty-content');
            categoryName.classList.remove('empty-content');

            if (name && code) {
                let status = statusInput === 'true';
                this.categories.push(new Category(code, name, status));
                saveCategory(this.categories);
                // Đóng modal sau khi thêm thành công
                overlay.style.visibility = 'hidden';
                overlay.style.opacity = '0';
                this.render(this.categories);
                document.getElementById('category-code').value = '';
                document.getElementById('category-name').value = '';
            } else {
                if (!code) {
                    noti_1.style.display = 'flex';
                    categoryCode.classList.add('empty-content');
                }
                if (!name) {
                    noti_2.style.display = 'flex';
                    categoryName.classList.add('empty-content');
                }
            }
            document.getElementById('active-on').checked = true;
        });
    }
    filterStatus() {
        this.categories = loadCategory();
        document
            .getElementById('active')
            .addEventListener('change', (event) => {
                console.log(event.target); // In ra phần tử <select>
                console.log(event.target.value); // In ra giá trị được chọn

                if (event.target.value === '') {
                    this.render(this.categories);
                    return;
                }
                let selectedStatus = event.target.value === 'true';
                let tempArray = this.categories.filter(
                    (temp) => temp.status === selectedStatus
                );
                this.render(tempArray);
            });
    }
}
new Manager();
