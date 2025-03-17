class Product {
    constructor(id, name, price, category, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.quantity = quantity;
    }
}
class ProductManage {
    constructor() {
        this.products = [new Product(17026, 'Anime', 20, 'Manga', 10)];
    }
    addProduct(name, price, category, quantity) {
        let id = Math.floor(Math.random() * 10000);
        const newProduct = new Product(id, name, price, category, quantity);
        this.products.push(newProduct);
        console.log('Add sucessfully!');
    }
    displayProducts() {
        console.log('List product :');
        this.products.forEach((product) =>
            console.log(
                `${product.id}. ${product.name}  Price: ${product.price} Category: ${product.category} Quantity: ${product.quantity}`
            )
        );
    }
    updateProduct(id) {
        const temp = this.products.find((product) => product.id === id);
        if (!temp) {
            console.log('Dont find this product with this id');
        } else {
            const newName = prompt('Cập nhật tên sản phẩm:');
            const newPrice = parseFloat(prompt('Cập nhật giá sản phẩm:'));
            const newCategory = prompt('Cập nhật danh mục sản phẩm:');
            const newQuantity = parseInt(
                prompt('Cập nhật số lượng sản phẩm:'),
                10
            );

            if (newName) temp.name = newName;
            if (!isNaN(newPrice)) temp.price = newPrice;
            if (newCategory) temp.category = newCategory;
            if (!isNaN(newQuantity)) temp.quantity = newQuantity;

            console.log(' Đã cập nhật sản phẩm thành công!');
        }
    }
    deleteProduct(id) {
        const index = this.products.findIndex((product) => product.id === id);
        if (index === -1) {
            console.log('Dont find this product with this id');
        } else {
            this.products.splice(index, 1);
            console.log('Delete successfully!');
        }
    }
    filterByPriceRange(minPrice, maxPrice) {
        const filtered = this.products.filter(
            (product) => product.price >= minPrice && product.price <= maxPrice
        );

        if (filtered.length === 0) {
            console.log(
                `Không có sản phẩm nào trong khoảng giá từ ${minPrice} đến ${maxPrice}.`
            );
        } else {
            console.log(
                `🔍 Danh sách sản phẩm có giá từ ${minPrice} đến ${maxPrice}:`
            );
            filtered.forEach((product) => {
                console.log(
                    `${product.id}. ${product.name} - $${product.price} - ${product.category} (SL: ${product.quantity})`
                );
            });
        }
    }
}
const manager = new ProductManage();
let running = true;

while (running) {
    const choice = prompt(
        'MENU QUẢN LÝ SẢN PHẨM\n' +
            '1. Thêm sản phẩm\n' +
            '2. Hiển thị tất cả sản phẩm\n' +
            '3. Hiển thị chi tiết sản phẩm theo ID\n' +
            '4. Cập nhật sản phẩm theo ID\n' +
            '5. Xóa sản phẩm theo ID\n' +
            '6. Lọc sản phẩm theo khoảng giá\n' +
            '7. Thoát\n\n' +
            'Nhập lựa chọn (1-7):'
    );

    switch (choice) {
        case '1':
            const name = prompt('Nhập tên sản phẩm:');
            const price = parseFloat(prompt('Nhập giá sản phẩm:'));
            const category = prompt('Nhập danh mục sản phẩm:');
            const quantity = parseInt(prompt('Nhập số lượng:'), 10);
            manager.addProduct(name, price, category, quantity);
            break;

        case '2':
            manager.displayProducts();
            break;

        case '3':
            const idToView = parseInt(prompt('Nhập ID sản phẩm cần xem:'), 10);
            const product = manager.products.find((p) => p.id === idToView);
            if (product) {
                console.log(
                    `Chi tiết sản phẩm:\n` +
                        `ID: ${product.id}\n` +
                        `Tên: ${product.name}\n` +
                        `Giá: ${product.price}\n` +
                        `Danh mục: ${product.category}\n` +
                        `Số lượng: ${product.quantity}`
                );
            } else {
                console.log('Không tìm thấy sản phẩm với ID này.');
            }
            break;

        case '4':
            const idToUpdate = parseInt(
                prompt('Nhập ID sản phẩm cần cập nhật:'),
                10
            );
            manager.updateProduct(idToUpdate);
            break;

        case '5':
            const idToDelete = parseInt(
                prompt('Nhập ID sản phẩm cần xóa:'),
                10
            );
            manager.deleteProduct(idToDelete);
            break;

        case '6':
            const minPrice = parseFloat(prompt('Nhập giá thấp nhất:'));
            const maxPrice = parseFloat(prompt('Nhập giá cao nhất:'));
            manager.filterByPriceRange(minPrice, maxPrice);
            break;

        case '7':
            running = false;
            alert(' Thoát chương trình.');
            break;

        default:
            alert(' Lựa chọn không hợp lệ!');
    }
}
