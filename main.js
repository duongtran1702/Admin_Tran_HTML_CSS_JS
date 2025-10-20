let storeAccount = [
    { email: 'admin170226@gmail.com', password: 'admin170226' },
];
let noti = document.getElementById('noti-duplicate');
function save() {
    localStorage.setItem('Account', JSON.stringify(storeAccount));
}
save();
function validateEmail(email) {
    if (!email) {
        noti.innerText = 'Email cannot be empty!';
        noti.style.display = 'flex';
        return false;
    }

    let parts = email.split('@');
    if (parts[0].trim() === '') {
        noti.innerText = "Email must have characters before '@'!";
        noti.style.display = 'flex';
        return false;
    }

    if (!email.includes('@')) {
        noti.innerText = "Email must contain '@'!";
        noti.style.display = 'flex';
        return false;
    }

    if (!email.endsWith('.vn') && !email.endsWith('.com')) {
        noti.innerText = "Email must end with '.vn' or '.com'!";
        noti.style.display = 'flex';
        return false;
    }
    return true;
}

let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let email = document.getElementById('email').value;
    if (!validateEmail(email)) return;

    let checkPassword = document.getElementById('password-not-match');
    let found = storeAccount.find((acc) => acc.email === email);
    if (found) {
        noti.style.display = 'flex';
        return;
    }
    noti.style.display = 'none';

    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('password-confirm').value;

    if (!password || !confirmPassword) {
        checkPassword.innerText =
            'Password or confirm password cannot be empty!';
        checkPassword.style.display = 'flex';
        return;
    }

    if (password !== confirmPassword) {
        checkPassword.style.display = 'flex';
        return;
    }
    checkPassword.style.display = 'none';

    storeAccount.push({ email: email, password: password });
    checkPassword.innerText = 'Register successfully !';
    checkPassword.style.color = 'rgb(65, 244, 71)';
    checkPassword.style.display = 'flex';
    save();
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1000);
});
