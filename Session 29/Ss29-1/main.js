class Contact {
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}
class ContactManager {
    constructor() {
        this.contacts = [];
    }
    addContact(name, email, phone) {
        let id = Math.floor(Math.random() * 100000);
        const newContact = new Contact(id, name, email, phone);
        this.contacts.push(newContact);
        console.log('Đã thêm liên hệ thành công!');
    }
    displayContact() {
        if (this.contacts.length === 0) {
            console.log('Danh bạ trống.');
            return;
        }
        console.log('Danh sách liên hệ:');
        this.contacts.forEach((contact) => {
            console.log(
                `ID: ${contact.id}, Tên: ${contact.name}, Email: ${contact.email}, SĐT: ${contact.phone}`
            );
        });
    }
    findContactByPhone(phone) {
        const foundContact = this.contacts.find(
            (contact) => contact.phone === phone
        );
        if (foundContact) {
            console.log('Thông tin liên hệ:');
            console.log(
                `ID: ${foundContact.id}, Tên: ${foundContact.name}, Email: ${foundContact.email}, SĐT: ${foundContact.phone}`
            );
        } else {
            console.log('Không tìm thấy liên hệ với số điện thoại này.');
        }
    }
    updateContact(id, name, email, phone) {
        const contactToUpdate = this.contacts.find(
            (contact) => contact.id === id
        );
        if (contactToUpdate) {
            contactToUpdate.name = name;
            contactToUpdate.email = email;
            contactToUpdate.phone = phone;
            console.log('Đã cập nhật thông tin liên hệ thành công!');
        } else {
            console.log('Không tìm thấy liên hệ với ID này.');
        }
    }

    deleteContact(id) {
        const index = this.contacts.findIndex((contact) => contact.id === id);
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log('Đã xóa liên hệ thành công!');
        } else {
            console.log('Không tìm thấy liên hệ với ID này.');
        }
    }
}
const manager = new ContactManager();
let running = true;

while (running) {
    const choice = prompt(
        'MENU DANH BẠ\n' +
            '1. Thêm liên hệ\n' +
            '2. Hiển thị danh bạ\n' +
            '3. Tìm liên hệ theo SĐT\n' +
            '4. Cập nhật liên hệ theo ID\n' +
            '5. Xóa liên hệ theo ID\n' +
            '6. Thoát\n\n' +
            'Nhập lựa chọn (1-6):'
    );

    switch (choice) {
        case '1':
            const name = prompt('Nhập tên:');
            const email = prompt('Nhập email:');
            const phone = prompt('Nhập số điện thoại:');
            manager.addContact(name, email, phone);
            break;
        case '2':
            manager.displayContact();
            break;
        case '3':
            const phoneToFind = prompt('Nhập số điện thoại cần tìm:');
            manager.findContactByPhone(phoneToFind);
            break;
        case '4':
            const idToUpdate = parseInt(
                prompt('Nhập ID liên hệ cần cập nhật:')
            );
            const newName = prompt('Tên mới:');
            const newEmail = prompt('Email mới:');
            const newPhone = prompt('SĐT mới:');
            manager.updateContact(idToUpdate, newName, newEmail, newPhone);
            break;
        case '5':
            const idToDelete = parseInt(prompt('Nhập ID liên hệ cần xóa:'));
            manager.deleteContact(idToDelete);
            break;
        case '6':
            running = false;
            alert('Tạm biệt!');
            break;
        default:
            alert('Lựa chọn không hợp lệ, vui lòng thử lại.');
    }
}
