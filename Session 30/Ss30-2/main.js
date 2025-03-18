const prompt = require('prompt-sync')();

class Book {
    constructor(id, name, price, quantity, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
    }
}

class BookStore {
    constructor() {
        this.shop = [
            new Book(19086, 'Doraemon', 18000, 10, 'Truyện thiếu nhi'),
            new Book(17205, 'Conan-tập 1', 22000, 7, 'Truyện trinh thám'),
            new Book(17206, 'Conan-tập 2', 22000, 10, 'Truyện trinh thám'),
            new Book(70126, 'One Piece', 25000, 5, 'Truyện phiêu lưu'),
        ];
        this.cart = [];
    }

    show() {
        console.table(this.shop);
    }

    showByCategory(nameCategory) {
        const temp = this.shop.filter((temp) => temp.category === nameCategory);
        console.table(temp);
    }

    addBook(id, name, price, quantity, category) {
        this.shop.push(new Book(id, name, price, quantity, category));
    }

    searchByName(input) {
        let temp = this.shop.filter((temp) =>
            temp.name.toLowerCase().includes(input.toLowerCase())
        );
        if (temp.length !== 0) {
            console.table(temp);
        } else {
            console.log(`Không tìm thấy truyện có tên là ${input}`);
        }
    }

    searchById(input) {
        let temp = this.shop.find((temp) => temp.id === input);
        if (temp) {
            console.table([temp]);
        } else {
            console.log(`Không tìm thấy truyện có ID là ${input}`);
        }
    }

    buyBook(id, quantity) {
        const book = this.shop.find((b) => b.id === id);
        if (!book) {
            console.log(`Không tìm thấy sách có ID ${id}`);
            return;
        }
        if (book.quantity < quantity) {
            console.log(
                `Không đủ số lượng! Hiện tại chỉ còn ${book.quantity} cuốn.`
            );
            return;
        }

        book.quantity -= quantity;
        const cartItem = this.cart.find((item) => item.id === id);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            this.cart.push(
                new Book(id, book.name, book.price, quantity, book.category)
            );
        }

        console.log(
            `Đã mua ${quantity} cuốn "${book.name}". Đã thêm vào giỏ hàng.`
        );
    }

    sortByPriceAsc() {
        this.shop.sort((a, b) => a.price - b.price);
        console.table(this.shop);
    }

    sortByPriceDesc() {
        this.shop.sort((a, b) => b.price - a.price);
        console.table(this.shop);
    }

    showCartSummary() {
        let totalQuantity = 0;
        let totalPrice = 0;

        for (const item of this.cart) {
            totalQuantity += item.quantity;
            totalPrice += item.quantity * item.price;
        }

        console.log('Tổng số lượng đã mua:', totalQuantity);
        console.log('Tổng tiền:', totalPrice);
    }

    showTotalStock() {
        let totalStock = 0;

        for (const book of this.shop) {
            totalStock += book.quantity;
        }

        console.log('Tổng số lượng sách trong kho:', totalStock);
    }
}

// ========== MENU ==========
const store = new BookStore();

while (true) {
    console.log('\n===== MENU =====');
    console.log('1. Hiển thị tất cả sách');
    console.log('2. Hiển thị sách theo thể loại');
    console.log('3. Thêm sách mới');
    console.log('4. Tìm kiếm theo tên');
    console.log('5. Tìm kiếm theo ID');
    console.log('6. Mua sách');
    console.log('7. Sắp xếp theo giá tăng dần');
    console.log('8. Sắp xếp theo giá giảm dần');
    console.log('9. Hiển thị giỏ hàng (Tổng SL & tiền)');
    console.log('10. Hiển thị tổng số sách trong kho');
    console.log('0. Thoát');

    const choice = prompt('Nhập lựa chọn của bạn: ');

    switch (choice) {
        case '1':
            store.show();
            break;
        case '2':
            const cate = prompt('Nhập thể loại cần xem: ');
            store.showByCategory(cate);
            break;
        case '3':
            const id = Number(prompt('ID: '));
            const name = prompt('Tên sách: ');
            const price = Number(prompt('Giá: '));
            const quantity = Number(prompt('Số lượng: '));
            const category = prompt('Thể loại: ');
            store.addBook(id, name, price, quantity, category);
            break;
        case '4':
            const nameSearch = prompt('Nhập tên sách cần tìm: ');
            store.searchByName(nameSearch);
            break;
        case '5':
            const idSearch = Number(prompt('Nhập ID cần tìm: '));
            store.searchById(idSearch);
            break;
        case '6':
            const idBuy = Number(prompt('Nhập ID sách muốn mua: '));
            const qtyBuy = Number(prompt('Nhập số lượng: '));
            store.buyBook(idBuy, qtyBuy);
            break;
        case '7':
            store.sortByPriceAsc();
            break;
        case '8':
            store.sortByPriceDesc();
            break;
        case '9':
            store.showCartSummary();
            break;
        case '10':
            store.showTotalStock();
            break;
        case '0':
            console.log('Cảm ơn bạn đã sử dụng chương trình!');
            process.exit(0);
        default:
            console.log('Lựa chọn không hợp lệ. Vui lòng chọn lại.');
    }
}
