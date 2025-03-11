let password="Abc123!@"
function isStrongPassword(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasMinLength = password.length >= 8;
    return hasUpperCase && hasLowerCase && hasNumber && hasMinLength;
}
alert(isStrongPassword(password))