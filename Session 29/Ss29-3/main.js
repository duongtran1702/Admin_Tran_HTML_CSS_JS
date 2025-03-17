class Dish {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
}
class Category {
    constructor() {
        this.listCategory = {
            Appetizer: [
                new Dish('Spring Rolls', 5, 'Fresh Vietnamese spring rolls'),
            ],
            MainCourse: [
                new Dish(
                    'Grilled Salmon',
                    15,
                    'Served with lemon butter sauce'
                ),
            ],
            Dessert: [
                new Dish(
                    'Chocolate Cake',
                    6,
                    'Rich and creamy chocolate flavor'
                ),
            ],
            Beverage: [new Dish('Iced Tea', 3, 'Refreshing lemon iced tea')],
        };
    }
    addDishSmart(nameCategory, name, price, description) {
        if (!this.listCategory.hasOwnProperty(nameCategory)) {
            this.listCategory[nameCategory] = [];
            console.log(`Đã tạo danh mục mới "${nameCategory}".`);
        }
        const newDish = new Dish(name, price, description);
        this.listCategory[nameCategory].push(newDish);
        console.log(`Đã thêm món "${name}" vào danh mục "${nameCategory}".`);
    }
    deleteDishByName(categoryName, dishName) {
        if (this.listCategory.hasOwnProperty(categoryName)) {
            const dishes = this.listCategory[categoryName];
            const index = dishes.findIndex((dish) => dish.name === dishName);

            if (index !== -1) {
                dishes.splice(index, 1);
                console.log(
                    `Đã xóa món "${dishName}" khỏi danh mục "${categoryName}".`
                );
            } else {
                console.log(
                    `Không tìm thấy món "${dishName}" trong danh mục "${categoryName}".`
                );
            }
        } else {
            console.log(`Danh mục "${categoryName}" không tồn tại.`);
        }
    }
    updateDishByName(nameCategory, nameToUpdate) {
        if (!this.listCategory.hasOwnProperty(nameCategory)) {
            console.log(`Không tìm thấy danh mục "${nameCategory}".`);
            return;
        }

        const dishes = this.listCategory[nameCategory];
        const dish = dishes.find((d) => d.name === nameToUpdate);

        if (!dish) {
            console.log(
                `Không tìm thấy món "${nameToUpdate}" trong danh mục "${nameCategory}".`
            );
            return;
        }
        const newName = prompt('Nhập tên mới:');
        const newPrice = parseFloat(prompt('Nhập giá mới:'));
        const newDescription = prompt('Nhập mô tả mới:');

        if (newName) dish.name = newName;
        if (!isNaN(newPrice)) dish.price = newPrice;
        if (newDescription) dish.description = newDescription;
        console.log(`Đã cập nhật món "${nameToUpdate}" thành công.`);
    }
    showMenu() {
        Object.keys(this.listCategory).forEach((key) => {
            console.log(`Category: ${key}`);
            this.listCategory[key].forEach((dish) =>
                console.log(
                    `Name: ${dish.name}  Price:${dish.price}  Description:${dish.description}`
                )
            );
        });
    }
    searchInMenu(nameDish) {
        let found = 0;
        Object.keys(this.listCategory).forEach((key) => {
            let temp = this.listCategory[key].find(
                (dish) => dish.name === nameDish
            );
            if (temp) {
                console.log(`Category: ${key}`);
                console.log(
                    `Name: ${temp.name}  Price:${temp.price}  Description:${temp.description}`
                );
                found = 1;
            }
        });
        if (found === 0) {
            console.log(`Không tìm thấy món "${nameDish}" trong thực đơn.`);
        }
    }
}
const menu = new Category();

while (true) {
    const choice = prompt(
        `========= MENU =========
1. Thêm món ăn vào danh mục
2. Xóa món ăn theo tên khỏi danh mục
3. Cập nhật thông tin món ăn
4. Hiển thị toàn bộ thực đơn
5. Tìm kiếm món ăn theo tên
6. Thoát
==========================
Nhập lựa chọn (1-6):`
    );
    switch (choice) {
        case '1':
            const newCategory = prompt('Nhập tên danh mục:');
            const newName = prompt('Nhập tên món ăn:');
            const newPrice = parseFloat(prompt('Nhập giá món ăn:'));
            const newDesc = prompt('Nhập mô tả món ăn:');
            menu.addDishSmart(newCategory, newName, newPrice, newDesc);
            break;

        case '2':
            const delCategory = prompt('Nhập tên danh mục:');
            const delName = prompt('Nhập tên món ăn cần xóa:');
            menu.deleteDishByName(delCategory, delName);
            break;

        case '3':
            const updateCategory = prompt('Nhập tên danh mục:');
            const updateName = prompt('Nhập tên món cần cập nhật:');
            menu.updateDishByName(updateCategory, updateName);
            break;

        case '4':
            menu.showMenu();
            break;

        case '5':
            const searchName = prompt('Nhập tên món ăn cần tìm:');
            menu.searchInMenu(searchName);
            break;

        case '6':
            console.log('Thoát chương trình. Tạm biệt!');
            break;

        default:
            console.log(' Vui lòng chọn một lựa chọn hợp lệ (1-6).');
    }

    if (choice === '6') break;
}
