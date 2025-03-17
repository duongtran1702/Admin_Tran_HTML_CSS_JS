class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
class Auth {
    constructor() {
        this.users = [];
    }

    isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|vn)$/;
        return emailRegex.test(email);
    }

    isStrongPassword(password) {
        const strongRegex = /^(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{6,})/;
        return strongRegex.test(password);
    }

    isEmailExists(email) {
        return this.users.some((user) => user.email === email);
    }

    register() {
        const name = prompt('Nhập tên người dùng:');
        const email = prompt('Nhập email:');
        const password = prompt('Nhập mật khẩu:');

        if (!this.isValidEmail(email)) {
            console.log(
                ' Email không hợp lệ. Vui lòng nhập email có dạng @...com hoặc @...vn'
            );
            return;
        }

        if (!this.isStrongPassword(password)) {
            console.log(
                ' Mật khẩu yếu. Mật khẩu phải có ít nhất 6 ký tự, 1 ký tự viết hoa và 1 ký tự đặc biệt.'
            );
            return;
        }

        if (this.isEmailExists(email)) {
            console.log(' Email đã tồn tại. Vui lòng dùng email khác.');
            return;
        }

        const newUser = new User(name, email, password);
        this.users.push(newUser);
        console.log('✅ Đăng ký thành công!');
    }

    login() {
        const email = prompt('Nhập email:');
        const password = prompt('Nhập mật khẩu:');

        const user = this.users.find(
            (u) => u.email === email && u.password === password
        );
        if (user) {
            console.log(' Đăng nhập thành công!');
            console.log(`Thông tin người dùng:
Tên: ${user.name}
Email: ${user.email}`);
        } else {
            console.log(' Đăng nhập thất bại. Sai email hoặc mật khẩu.');
        }
    }
}

const auth = new Auth();
while (true) {
    const choice = prompt(`
======= MENU =======
1. Đăng ký người dùng
2. Đăng nhập
3. Thoát
===================
Nhập lựa chọn (1-3):`);

    switch (choice) {
        case '1':
            auth.register();
            break;
        case '2':
            auth.login();
            break;
        case '3':
            console.log('Tạm biệt!');
            break;
        default:
            console.log('Vui lòng chọn một lựa chọn hợp lệ!');
    }

    if (choice === '3') break;
}
