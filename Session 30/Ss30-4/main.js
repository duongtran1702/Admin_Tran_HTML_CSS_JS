const prompt = require('prompt-sync')();
class Course {
    constructor(id, name, instructor) {
        this.id = id;
        this.name = name;
        this.instructor = instructor;
        this.students = [];
    }
}

class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.registeredCourses = [];
    }
}

class CourseManager {
    constructor() {
        this.courses = [];
        this.users = [];
    }

    // ----------------- KHÓA HỌC -----------------
    addCourse(id, name, instructor) {
        const existing = this.courses.find((c) => c.id === id);
        if (existing) {
            console.log(' Khóa học đã tồn tại.');
            return;
        }
        this.courses.push(new Course(id, name, instructor));
        console.log(' Đã thêm khóa học.');
    }

    searchCourse(name) {
        const results = this.courses.filter((c) =>
            c.name.toLowerCase().includes(name.toLowerCase())
        );
        console.log(' Kết quả tìm kiếm:');
        results.forEach((c) => {
            console.log(
                `ID: ${c.id}, Tên: ${c.name}, Giáo viên: ${c.instructor}`
            );
        });
    }

    deleteCourse(courseId) {
        const index = this.courses.findIndex((c) => c.id === courseId);
        if (index === -1) {
            console.log(' Không tìm thấy khóa học.');
            return;
        }
        this.courses.splice(index, 1);
        this.users.forEach((user) => {
            user.registeredCourses = user.registeredCourses.filter(
                (id) => id !== courseId
            );
        });

        console.log(` Đã xóa khóa học ${courseId} và cập nhật người dùng.`);
    }
    addUser(id, name) {
        const existing = this.users.find((u) => u.id === id);
        if (existing) {
            console.log('Người dùng đã tồn tại.');
            return;
        }
        this.users.push(new User(id, name));
        console.log(' Đã thêm người dùng.');
    }
    registerCourse(userId, courseId) {
        const user = this.users.find((u) => u.id === userId);
        const course = this.courses.find((c) => c.id === courseId);
        if (!user || !course) {
            console.log(' Người dùng hoặc khóa học không tồn tại.');
            return;
        }
        if (user.registeredCourses.includes(courseId)) {
            console.log('Người dùng đã đăng ký khóa học này.');
            return;
        }

        user.registeredCourses.push(courseId);
        course.students.push(userId);
        console.log(' Đăng ký thành công.');
    }

    unregisterCourse(userId, courseId) {
        const user = this.users.find((u) => u.id === userId);
        const course = this.courses.find((c) => c.id === courseId);
        if (!user || !course) {
            console.log(' Người dùng hoặc khóa học không tồn tại.');
            return;
        }

        user.registeredCourses = user.registeredCourses.filter(
            (id) => id !== courseId
        );
        course.students = course.students.filter((id) => id !== userId);
        console.log(' Đã hủy đăng ký.');
    }

    showUserCourses(userId) {
        const user = this.users.find((u) => u.id === userId);
        if (!user) {
            console.log('❌ Không tìm thấy người dùng.');
            return;
        }

        console.log(`📚 Khóa học của người dùng ${user.name}:`);
        user.registeredCourses.forEach((courseId) => {
            const course = this.courses.find((c) => c.id === courseId);
            if (course) {
                console.log(`- ${course.name} (${course.instructor})`);
            }
        });
    }
}

const app = new CourseManager();

while (true) {
    console.log('\n===== MENU CHÍNH =====');
    console.log('1. Quản lý khóa học');
    console.log('2. Quản lý người dùng');
    console.log('3. Thoát');
    const choice = prompt('Chọn chức năng: ');

    if (choice === '1') {
        while (true) {
            console.log('\n--- Quản lý khóa học ---');
            console.log('1. Thêm khóa học');
            console.log('2. Tìm kiếm khóa học');
            console.log('3. Xóa khóa học');
            console.log('4. Quay lại menu chính');
            const subChoice = prompt('Chọn chức năng: ');

            if (subChoice === '1') {
                const id = prompt('Nhập ID khóa học: ');
                const name = prompt('Nhập tên khóa học: ');
                const instructor = prompt('Nhập tên giáo viên: ');
                app.addCourse(id, name, instructor);
            } else if (subChoice === '2') {
                const name = prompt('Nhập tên khóa học cần tìm: ');
                app.searchCourse(name);
            } else if (subChoice === '3') {
                const id = prompt('Nhập ID khóa học cần xóa: ');
                app.deleteCourse(id);
            } else if (subChoice === '4') {
                break;
            } else {
                console.log('Lựa chọn không hợp lệ.');
            }
        }
    } else if (choice === '2') {
        while (true) {
            console.log('\n--- Quản lý người dùng ---');
            console.log('1. Thêm người dùng');
            console.log('2. Đăng ký khóa học');
            console.log('3. Hủy đăng ký khóa học');
            console.log('4. Hiển thị danh sách khóa học của người dùng');
            console.log('5. Quay lại menu chính');
            const subChoice = prompt('Chọn chức năng: ');

            if (subChoice === '1') {
                const id = prompt('Nhập ID người dùng: ');
                const name = prompt('Nhập tên người dùng: ');
                app.addUser(id, name);
            } else if (subChoice === '2') {
                const userId = prompt('Nhập ID người dùng: ');
                const courseId = prompt('Nhập ID khóa học muốn đăng ký: ');
                app.registerCourse(userId, courseId);
            } else if (subChoice === '3') {
                const userId = prompt('Nhập ID người dùng: ');
                const courseId = prompt('Nhập ID khóa học muốn hủy đăng ký: ');
                app.unregisterCourse(userId, courseId);
            } else if (subChoice === '4') {
                const userId = prompt('Nhập ID người dùng: ');
                app.showUserCourses(userId);
            } else if (subChoice === '5') {
                break;
            } else {
                console.log('Lựa chọn không hợp lệ.');
            }
        }
    } else if (choice === '3') {
        console.log('👋 Tạm biệt!');
        break;
    } else {
        console.log('Lựa chọn không hợp lệ.');
    }
}
