let staffList = [
  { name: 'Nguyễn Văn A', position: 'Developer' },
  { name: 'Trần Thị B', position: 'Designer' },
  { name: 'Phạm Văn C', position: 'Project Manager' },
  // Dương có thể thêm nhiều dòng để kiểm tra phân trang
];

const rowPerPage = 3;
let currentPage = 1;

function renderTable(page) {
  let start = (page - 1) * rowPerPage;
  let end = start + rowPerPage;
  let pageData = staffList.slice(start, end);

  let tbody = document.getElementById('table-body');
  tbody.innerHTML = '';

  pageData.forEach((staff, index) => {
    let row = `<tr>
        <td>${start + index + 1}</td>
        <td>${staff.name}</td>
        <td>${staff.position}</td>
      </tr>`;
    tbody.innerHTML += row;
  });

  renderPagination();
}

function renderPagination() {
  let totalPages = Math.ceil(staffList.length / rowPerPage);
  let pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  let prev = `<button ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">Previous</button>`;
  pagination.innerHTML += prev;

  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `<button ${i === currentPage ? 'style="background-color: blue; color: white"' : ''} onclick="changePage(${i})">${i}</button>`;
  }

  let next = `<button ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">Next</button>`;
  pagination.innerHTML += next;
}

function changePage(page) {
  currentPage = page;
  renderTable(page);
}

document.getElementById('addBtn').onclick = function () {
  let name = document.getElementById('name').value.trim();
  let position = document.getElementById('position').value.trim();
  if (name && position) {
    staffList.push({ name, position });
    let totalPages = Math.ceil(staffList.length / rowPerPage);
    currentPage = totalPages; // nhảy đến trang cuối
    renderTable(currentPage);
    document.getElementById('name').value = '';
    document.getElementById('position').value = '';
  } else {
    alert('Vui lòng nhập đủ thông tin!');
  }
};

renderTable(currentPage);
