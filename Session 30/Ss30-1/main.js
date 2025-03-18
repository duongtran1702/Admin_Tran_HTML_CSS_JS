let products = [
    {
        id: 1,
        name: 'mèn mén',
        price: 20000,
        quantity: 20,
        category: 'món ăn dân tộc Mông',
    },
    {
        id: 2,
        name: 'mứt',
        price: 80000,
        quantity: 21,
        category: 'món ăn dân tộc Kinh',
    },
    {
        id: 3,
        name: 'cơm lam',
        price: 40000,
        quantity: 15,
        category: 'món ăn dân tộc Mông',
    },
    {
        id: 4,
        name: 'bánh đậu xanh',
        price: 60000,
        quantity: 30,
        category: 'món ăn dân tộc Kinh',
    },
];

class ManageProduct {
    constructor(input) {
        this.productList = [];
        this.cart = [];
        this.addFromProducts(input);
    }

    addFromProducts(input) {
        for (const item of input) {
            this.productList.push(item);
        }
    }

    filterCategory() {
        let food_Mong = this.productList.filter(
            (dish) => dish.category === 'món ăn dân tộc Mông'
        );
        let food_Kinh = this.productList.filter(
            (dish) => dish.category === 'món ăn dân tộc Kinh'
        );

        console.log('Danh mục : Món ăn dân tộc Mông');
        console.table(food_Mong);

        console.log('Danh mục : Món ăn dân tộc Kinh');
        console.table(food_Kinh);
    }

    buyProduct(id) {
        const found = this.productList.find((dish) => dish.id === id);

        if (!found) {
            console.log('Sản phẩm không có trong cửa hàng');
            return;
        }
        if (found.quantity === 0) {
            console.log('Sản phẩm này đã hết!');
            return;
        }
        const input = prompt('Nhập số lượng:');
        const quantity = parseInt(input);
        if (isNaN(quantity) || quantity <= 0) {
            console.log('Số lượng không hợp lệ');
            return;
        }
        if (quantity > found.quantity) {
            console.log('Số lượng không đủ');
            return;
        }
        const existingItem = this.cart.find((dish) => dish.id === id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                id: found.id,
                name: found.name,
                quantity: quantity,
                price: found.price,
            });
        }
        found.quantity -= quantity;
    }

    sortByPriceAscending() {
        this.productList.sort((a, b) => a.price - b.price);
        console.log('Sản phẩm sắp xếp theo giá tăng dần:');
        console.table(this.productList);
    }

    sortByPriceDescending() {
        this.productList.sort((a, b) => b.price - a.price);
        console.log('Sản phẩm sắp xếp theo giá giảm dần:');
        console.table(this.productList);
    }

    calculateTotal() {
        let total = 0;
        for (const item of this.cart) {
            total += item.price * item.quantity;
        }
        console.log(`Tổng tiền cần thanh toán: ${total.toLocaleString('vi-VN')} VND`);
        return total;
    }
}

const dish = new ManageProduct(products);

while (true) {
    const choice = prompt(
        '1. Hiển thị sản phẩm theo danh mục\n' +
        '2. Mua sản phẩm theo id\n' +
        '3. Sắp xếp theo giá tăng dần\n' +
        '4. Sắp xếp theo giá giảm dần\n' +
        '5. Tính tổng tiền giỏ hàng\n' +
        '6. Thoát\n' +
        'Nhập lựa chọn:'
    );

    switch (choice) {
        case '1':
            dish.filterCategory();
            break;
        case '2':
            const idInput = prompt('Nhập id sản phẩm muốn mua:');
            const id = parseInt(idInput);
            dish.buyProduct(id);
            break;
        case '3':
            dish.sortByPriceAscending();
            break;
        case '4':
            dish.sortByPriceDescending();
            break;
        case '5':
            dish.calculateTotal();
            break;
        case '6':
            console.log('Thoát chương trình');
            break;
        default:
            console.log('Lựa chọn không hợp lệ');
    }

    if (choice === '6') break;
}
