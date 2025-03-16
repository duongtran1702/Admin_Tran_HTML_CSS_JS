let library = [];
function addBook(input) {
    let id;
    do {
        id = Math.floor(Math.random() * 1000);
    } while (input.some((temp) => temp.id === id));
    let title = prompt('Nhập tên sách:');
    let author = prompt('Nhập tác giả:');
    let year = Number(prompt('Nhập năm xuất bản:'));
    let price = Number(prompt('Nhập giá sách:'));
    let isAvailable = true;
    let newBook = {
        id,
        title,
        author,
        year,
        price,
        isAvailable,
    };

    input.push(newBook);
    console.log('Đã thêm sách mới thành công!');
}
function showBooks(input) {
    if (input.length === 0) {
        console.log('Thư viện hiện chưa có sách nào.');
        return;
    }
    console.log('\n--- list booK ---');
    for (let i = 0; i < input.length; i++) {
        const book = input[i];
        console.log(` ID           : ${book.id}`);
        console.log(` Tên sách     : ${book.title}`);
        console.log(` Tác giả      : ${book.author}`);
        console.log(` Năm xuất bản : ${book.year}`);
        console.log(` Giá          : ${book.price} VNĐ`);
        console.log(` Có sẵn       : ${book.isAvailable ? 'yes' : 'no'}`);
        console.log('------------------------------');
    }
}

function findBookByTitle(input) {
    const titleSearch = prompt('Nhập tiêu đề sách cần tìm:').toLowerCase();
    const foundBooks = input.filter((book) =>
        book.title.toLowerCase().includes(titleSearch)
    );

    if (foundBooks.length === 0) {
        console.log('Không tìm thấy sách nào có tiêu đề phù hợp.');
    } else {
        console.log(`\nTìm thấy ${foundBooks.length} sách:`);
        for (let i = 0; i < foundBooks.length; i++) {
            const book = foundBooks[i];
            console.log(`${i + 1}. ID: ${book.id}`);
            console.log(`   Tên sách     : ${book.title}`);
            console.log(`   Tác giả      : ${book.author}`);
            console.log(`   Năm xuất bản : ${book.year}`);
            console.log(`   Giá          : ${book.price} VNĐ`);
            console.log(`   Có sẵn       : ${book.isAvailable ? '✅' : '❌'}`);
            console.log('------------------------------');
        }
    }
}

function updateBookStatus(input) {
    const idToUpdate = Number(prompt('Nhập ID sách muốn cập nhật trạng thái:'));
    const index = input.findIndex((book) => book.id === idToUpdate);

    if (index === -1) {
        console.log('Không tìm thấy sách với ID đã nhập.');
    } else {
        const currentStatus = input[index].isAvailable;
        const newStatus = prompt(
            `Sách "${input[index].title}" hiện đang ${
                currentStatus ? 'có sẵn' : 'đang được mượn'
            }.\n` + 'Bạn muốn cập nhật trạng thái sang (Mượn = M / Trả = T)?'
        ).toUpperCase();
        if (newStatus === 'M') {
            input[index].isAvailable = false;
            console.log(
                `Đã cập nhật: Sách "${input[index].title}" đang được mượn.`
            );
        } else if (newStatus === 'T') {
            input[index].isAvailable = true;
            console.log(
                `Đã cập nhật: Sách "${input[index].title}" hiện có sẵn.`
            );
        } else {
            console.log('Trạng thái không hợp lệ. Vui lòng nhập M hoặc T.');
        }
    }
}

function deleteBookById(input) {
    const idToDelete = Number(prompt('Nhập ID sách cần xóa:'));
    const index = input.findIndex((book) => book.id === idToDelete);

    if (index === -1) {
        console.log('Không tìm thấy sách với ID đã nhập.');
    } else {
        const confirm = prompt(
            `Bạn có chắc muốn xóa sách "${input[index].title}"? Nhập Y để xác nhận:`
        ).toUpperCase();

        if (confirm === 'Y') {
            input.splice(index, 1);
            console.log('Đã xóa sách khỏi danh sách.');
        } else {
            console.log('Đã hủy thao tác xóa.');
        }
    }
}

function arrangeBookByPrice(input) {
    input.sort((a, b) => a.price - b.price);
    console.log('Đã sắp xếp sách theo giá tăng dần:');
}

function showMenu() {
    console.log('\n--- QUẢN LÝ THƯ VIỆN ---');
    console.log('1. Thêm sách mới');
    console.log('2. Xóa sách theo ID');
    console.log('3. Cập nhật trạng thái mượn/trả sách');
    console.log('4. Tìm sách theo tiêu đề');
    console.log('5. Hiển thị danh sách sách');
    console.log('6. Sắp xếp sách theo giá tăng dần');
    console.log('0. Thoát');
}

function runLibraryProgram() {
    let choice;
    do {
        showMenu();
        choice = prompt('Nhập lựa chọn của bạn:');
        switch (choice) {
            case '1':
                addBook(library);
                break;
            case '2':
                deleteBookById(library);
                break;
            case '3':
                updateBookStatus(library);
                break;
            case '4':
                findBookByTitle(library);
                break;
            case '5':
                showBooks(library);
                break;
            case '6':
                arrangeBookByPrice(library);
                break;
            case '0':
                console.log('Thoát chương trình.');
                break;
            default:
                console.log('Lựa chọn không hợp lệ. Vui lòng thử lại.');
        }
    } while (choice !== '0');
}
